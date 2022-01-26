import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../page.css';
import '../../App.css';
import { useTranslation } from 'react-i18next';
import ArmyPage from '../../components/army/armyPage';
import ArmyPieceCounts from '../../components/army/armyPieceCounts/armyPieceCounts';
import ArmyPiecesList from '../../components/army/armyList/armyPiecesList';
import CreateArmy from './createArmy';
import { TabType } from '../../types';
import { Army as ArmyType } from '../../API';
import { fetchArmy } from '../../ts/dbFunctions';
import tc from '../../localesComplex/translateArmy';
import i18n from '../../i18nextConf';
import { useStateValue } from '../../state/state';

interface ArmyProps {
  id: string;
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

const ViewArmy = (Props: ViewArmyProps) => {
  const { army } = Props;
  return (
    <>
      <div className='heading-input padding-left'>{army.name}</div>
      <i className='padding-left'>Created by {army.owner}</i>
      <div className='army-container'>
        <ArmyPieceCounts pieces={army.pieces} id={army.id} />
      </div>
    </>
  );
};

const CentrePage = (Props: CentrePageProps) => {
  const { state } = useStateValue();
  const { t } = useTranslation('translation', { i18n });

  if (!state.fetchedData.userArmies) {
    return null;
  }

  return (
    <div>
      <h1>{t('Your Armies')}</h1>
      <p>
        {tc('YouHaveXArmies', state.userArmies.length)}
        {state.userArmies.length
          ? t('SelectOneToViewAndEdit')
          : t('ClickPlusToGetStarted')}
      </p>
      <ArmyPiecesList armies={state.userArmies} />
    </div>
  );
};

const ArmyPageSelector = (Props: SelectArmyPageProps) => {
  const { state } = useStateValue();
  const { ID } = Props;

  if (!ID) {
    return (
      <ArmyPage>
        <CentrePage ID={ID} />
      </ArmyPage>
    );
  }

  if (!state.fetchedData.userArmies) {
    return (
      <ArmyPage>{null}</ArmyPage>
    );
  }

  const userArmy = state.userArmies.find((army) => army.id === ID);
  if (userArmy) {
    return <CreateArmy army={userArmy} />;
  }

  const globalArmy = state.globalArmies.find((army) => army.id === ID);
  if (globalArmy) {
    return (
      <ArmyPage>
        <ViewArmy army={globalArmy} />
      </ArmyPage>
    );
  }

  return (
    <ArmyPage>
      Army not found.
      {JSON.stringify(state.globalArmies)}
    </ArmyPage>
  );
};

const Army = () => {
  const { state, dispatch } = useStateValue();
  const { t } = useTranslation('translation', { i18n });
  const { id } = useParams<ArmyProps>();

  useEffect(() => {
    if (!id) {
      document.title = 'RC | Your Armies: View your armies or create a new one';
      dispatch({
        type: 'addTab',
        value: {
          id: 'army', path: '/army', title: t('Your Armies'), type: TabType.Army,
        },
      });
    } else if (!state.globalArmies.some((army) => army.id === id)) {
      fetchArmy(id).then((army) => {
        if (army) {
          dispatch({
            type: 'addGlobalArmy',
            value: army,
          });
          dispatch({
            type: 'addTab',
            value: {
              id: army.id, path: `/army/${army.id}`, title: t(`View ${army.name}`), type: TabType.Edit,
            },
          });
        }
      });
    }
  }, [state.fetchedData.userArmies, dispatch, id, t]);

  return (
    <ArmyPageSelector ID={id} />
  );
};

export default Army;
