import React, { useEffect, useState } from 'react';
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

interface ArmyProps {
  ID?: string;
  createTab: (ID: string, path: string, title: string, type: TabType) => void;
}

interface CentrePageProps {
  ID?: string;
  fetchedData: boolean;
  armies: ArmyType[];
}

interface SelectArmyPageProps {
  ID?: string;
  fetchedData: boolean;
  armies: ArmyType[];
  createTab: (ID: string, path: string, title: string, type: TabType) => void;
}

interface ViewArmyProps {
  army: ArmyType;
}

function ViewArmy(Props: ViewArmyProps) {
  return (
    <React.Fragment>
      <span className='heading-input padding-left'>{Props.army.name}</span>
      <div className='armyContainer'>
        <ArmyPieceCounts pieces={Props.army.pieces}/>
      </div>
    </React.Fragment>
  );
}

function CentrePage(Props: CentrePageProps) {
  const { t } = useTranslation('translation', { i18n });

  if(!Props.fetchedData) {
    return <React.Fragment/>
  }

  return (
  <React.Fragment>
    <div>
      <h1>{t('Your Armies')}</h1>
      {tc('YouHaveXArmies', Props.armies.length)}
      {Props.armies.length ?
        t('SelectOneToViewAndEdit') :
        t('ClickPlusToGetStarted')}
    </div>
  </React.Fragment>)
}

function ArmyPageSelector(Props: SelectArmyPageProps) {
  if(!Props.fetchedData) {
    return (
      <ArmyPage>
      </ArmyPage>
    );
  }

  if(!Props.ID) {
    return (
      <ArmyPage>
        <CentrePage armies={Props.armies} ID={Props.ID} fetchedData={Props.fetchedData}/>
      </ArmyPage>
    );
  }

  let userArmy = Props.armies.find(army => army.id === Props.ID);
  if(userArmy) {
    return <CreateArmy army={userArmy} createTab={Props.createTab}/>
  }

  let globalArmy = Props.armies.find(army => army.id === Props.ID);
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
  const [armies, updateArmies] = useState<ArmyType[]>([]);
  const [fetchedData, updateFetchedData] = useState(false);
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
    Props.createTab('army', 'army', t('Your Army'), TabType.Army);

    let isMounted = true;
    getPageData().then(result => {
      if (isMounted) {
        updateArmies(result ? result : []);
        updateFetchedData(true);
      }
    });
    return () => { isMounted = false };
  }, [Props, t]);

  return (
    <ArmyPageSelector armies={armies} ID={Props.ID} fetchedData={fetchedData} createTab={Props.createTab}/>
  )
};

export default Army;