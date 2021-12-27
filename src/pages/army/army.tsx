import React, { useEffect } from 'react';
import '../page.css';
import '../../App.css';
import ArmyPage from '../../components/army/armyPage';
import ArmyPieceCounts from '../../components/army/armyPieceCounts/armyPieceCounts';
import CreateArmy from './createArmy';
import { TabType } from '../../types';
import { listArmies } from '../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import { Army as ArmyType, ListArmiesQuery } from '../../API';
import { GraphQLResult } from '@aws-amplify/api';
import tc from '../../localesComplex/translateArmy';
import i18n from '../../i18nextConf';
import { useTranslation } from 'react-i18next';
import { useStateValue } from '../../state/state';

interface ArmyProps {
  ID?: string;
}

interface CentrePageProps {
  ID?: string;
}

interface SelectArmyPageProps {
  ID?: string;
}

interface ViewArmyProps {
  army: ArmyType;
}

function ViewArmy(Props: ViewArmyProps) {
  return (
    <React.Fragment>
      <span className='heading-input padding-left'>{Props.army.name}</span>
      <div className='armyContainer'>
        <ArmyPieceCounts pieces={Props.army.pieces} id={Props.army.id}/>
      </div>
    </React.Fragment>
  );
}

function CentrePage(Props: CentrePageProps) {
  const { state } = useStateValue();
  const { t } = useTranslation('translation', { i18n });

  if(!state.fetchedData.userArmies) {
    return <React.Fragment/>
  }

  return (
  <React.Fragment>
    <div>
      <h1>{t('Your Armies')}</h1>
      {tc('YouHaveXArmies', state.userArmies.length)}
      {state.userArmies.length ?
        t('SelectOneToViewAndEdit') :
        t('ClickPlusToGetStarted')}
    </div>
  </React.Fragment>)
}

function ArmyPageSelector(Props: SelectArmyPageProps) {
  const { state } = useStateValue();

  if(!state.fetchedData.userArmies) {
    return (
      <ArmyPage>
      </ArmyPage>
    );
  }

  if(!Props.ID) {
    return (
      <ArmyPage>
        <CentrePage ID={Props.ID}/>
      </ArmyPage>
    );
  }

  let userArmy = state.userArmies.find(army => army.id === Props.ID);
  if(userArmy) {
    return <CreateArmy army={userArmy}/>
  }

  let globalArmy = state.userArmies.find(army => army.id === Props.ID);
  if(globalArmy) {
    return (
      <ArmyPage>
        <ViewArmy army={globalArmy}/>
      </ArmyPage>
    );
  }

  return (
    <ArmyPage>
      Army not found.
    </ArmyPage>
  );
}

function Army(Props: ArmyProps) {
  const {state, dispatch} = useStateValue();
  const { t } = useTranslation('translation', { i18n });

  async function getPageData() {
    try {
      const armyData = (await API.graphql(graphqlOperation(listArmies))) as GraphQLResult<ListArmiesQuery>;
      return armyData?.data?.listArmies?.items;
    }
    catch(error) {
      console.log('Error: ', error);
    }

    return [];
  }

  useEffect(() => {
    if(!Props.ID) {
      dispatch({
        type: 'addTab',
        value: {
          id: 'army', path: '/army', title: t('Your Army'), type: TabType.Army
        }
      });
    }

    let isMounted = true;

    if(!state.fetchedData.userArmies) {
      getPageData().then(result => {
        if (isMounted) {
          dispatch({
            type: 'setUserArmies',
            value: result ? result : []
          });
        }
      });
    }

    return () => { isMounted = false };
  }, [state.fetchedData.userArmies, dispatch, Props, t]);

  return (
    <React.Fragment>
      <ArmyPageSelector ID={Props.ID}/>
    </React.Fragment>
  )
};

export default Army;