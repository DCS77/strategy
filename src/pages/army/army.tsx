import React, { useEffect } from 'react';
import '../page.css';
import '../../App.css';
import { useTranslation } from 'react-i18next';
import ArmyPage from '../../components/army/armyPage';
import ArmyPieceCounts from '../../components/army/armyPieceCounts/armyPieceCounts';
import ArmyPiecesList from '../../components/army/armyList/armyPiecesList';
import CreateArmy from './createArmy';
import { TabType } from '../../types';
import { Army as ArmyType, ListArmiesQuery } from '../../API';
import tc from '../../localesComplex/translateArmy';
import i18n from '../../i18nextConf';
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

const ViewArmy = (Props: ViewArmyProps) => {
  const { army } = Props;
  return (
    <>
      <span className='heading-input padding-left'>{army.name}</span>
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

  if (!state.fetchedData.userArmies) {
    return (
      <ArmyPage>{null}</ArmyPage>
    );
  }

  if (!ID) {
    return (
      <ArmyPage>
        <CentrePage ID={ID} />
      </ArmyPage>
    );
  }

  const userArmy = state.userArmies.find((army) => army.id === ID);
  if (userArmy) {
    return <CreateArmy army={userArmy} />;
  }

  const globalArmy = state.userArmies.find((army) => army.id === ID);
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
    </ArmyPage>
  );
};

const Army = (Props: ArmyProps) => {
  const { state, dispatch } = useStateValue();
  const { t } = useTranslation('translation', { i18n });
  const { ID } = Props;

  useEffect(() => {
    if (!ID) {
      document.title = 'RC | Your Armies: View your armies or create a new one';
      dispatch({
        type: 'addTab',
        value: {
          id: 'army', path: '/army', title: t('Your Armies'), type: TabType.Army,
        },
      });
    }
  }, [state.fetchedData.userArmies, dispatch, Props, t]);

  return (
    <ArmyPageSelector ID={ID} />
  );
};

export default Army;
