import React, { useEffect } from 'react';
import '../../pages/page.css';
import '../../App.css';
import { Plus } from 'phosphor-react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BarItem from '../items/barItem';
import DefaultNarrowView from '../../pages/structures/defaultNarrowView';
import DefaultWideView from '../../pages/structures/defaultWideView';
import ArmyList from './armyList/armyList';
import { fetchUserArmies } from '../../ts/db/army';
import { StateProps, useStateValue } from '../../state/state';
import i18n from '../../i18nextConf';

interface ViewProps {
  children: React.ReactNode;
  ShowCreateArmyPage: any;
  ShowHomePage: any;
  state: StateProps;
  t: any;
}

const ArmyButtonList = (Props: ViewProps) => {
  const {
    ShowCreateArmyPage, ShowHomePage, state, t,
  } = Props;

  return (
    <>
      <BarItem mouseUpHandler={ShowHomePage}>{t('Your Armies')}</BarItem>
      <ArmyList armies={state.userArmies} />
      <BarItem mouseUpHandler={ShowCreateArmyPage}><Plus /></BarItem>
    </>
  );
};

const NarrowArmyPageView = (Props: ViewProps) => {
  const {
    children, ShowCreateArmyPage, ShowHomePage, state, t,
  } = Props;

  const ArmyListComponent = (
    <ArmyButtonList ShowCreateArmyPage={ShowCreateArmyPage} ShowHomePage={ShowHomePage} state={state} t={t}>
      {children}
    </ArmyButtonList>
  );

  return (
    <DefaultNarrowView
      Elements={[
        ArmyListComponent,
        children,
        t('Actions'),
        t('Chat'),
      ]}
    />
  );
};

const WideArmyPageView = (Props: ViewProps) => {
  const {
    children, ShowCreateArmyPage, ShowHomePage, state, t,
  } = Props;

  const ArmyListComponent = (
    <ArmyButtonList ShowCreateArmyPage={ShowCreateArmyPage} ShowHomePage={ShowHomePage} state={state} t={t}>
      {children}
    </ArmyButtonList>
  );

  return (
    <DefaultWideView
      BottomLeft={ArmyListComponent}
      Centre={children}
      TopRight={t('Actions')}
      BottomRight={t('Chat')}
    />
  );
};

interface ArmyPageProps {
  children: React.ReactNode;
}

const ArmyPage = (Props: ArmyPageProps) => {
  const history = useHistory();
  const { state, dispatch } = useStateValue();
  const { t } = useTranslation('translation', { i18n });
  const { children } = Props;

  useEffect(() => {
    if (!state.fetchedData.userArmies) {
      fetchUserArmies(state.userData.username).then((result) => {
        dispatch({
          type: 'setUserArmies',
          value: result || [],
        });
      });
    }
  }, [dispatch, Props, state.fetchedData.userArmies]);

  function ShowHomePage() {
    history.push('/army');
  }
  function ShowCreateArmyPage() {
    history.push('/create');
  }

  return (
    <>
      <div className='narrow-screen'>
        <NarrowArmyPageView
          ShowCreateArmyPage={ShowCreateArmyPage}
          ShowHomePage={ShowHomePage}
          state={state}
          t={t}
        >
          {children}
        </NarrowArmyPageView>
      </div>
      <div className='wide-screen'>
        <WideArmyPageView
          ShowCreateArmyPage={ShowCreateArmyPage}
          ShowHomePage={ShowHomePage}
          state={state}
          t={t}
        >
          {children}
        </WideArmyPageView>
      </div>
    </>
  );
};

export default ArmyPage;
