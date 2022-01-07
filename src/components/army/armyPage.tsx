import React, { useEffect } from 'react';
import '../../pages/page.css';
import '../../App.css';
import { Plus } from 'phosphor-react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BarItem from '../items/barItem';
import NavigationList from '../navigation/navigationList';
import ArmyList from './armyList/armyList';
import { getArmies } from '../../ts/dbFunctions';
import { StateProps, useStateValue } from '../../state/state';
import i18n from '../../i18nextConf';

interface ViewProps {
  children: React.ReactNode;
  ShowCreateArmyPage: any;
  ShowHomePage: any;
  state: StateProps;
  t: any;
}

const NarrowArmyPageView = (Props: ViewProps) => {
  const {
    children, ShowCreateArmyPage, ShowHomePage, state, t,
  } = Props;
  return (
    <>
      <div className='nav-bar-horizontal vertical-padding-top vertical-padding-bottom'>
        <NavigationList />
      </div>
      <div className='vertical-padding-bottom'>
        <BarItem mouseUpHandler={ShowHomePage}>{t('Your Armies')}</BarItem>
        <ArmyList armies={state.userArmies} />
        <BarItem mouseUpHandler={ShowCreateArmyPage}><Plus /></BarItem>
      </div>
      <div className='vertical-padding-bottom'>
        {children}
      </div>
      <div className='vertical-padding-bottom'>
        {t('Actions')}
      </div>
      <div className='vertical-padding-bottom'>
        {t('Chat')}
      </div>
    </>
  );
};

const WideArmyPageView = (Props: ViewProps) => {
  const {
    children, ShowCreateArmyPage, ShowHomePage, state, t,
  } = Props;
  return (
    <div className='full-size game-row'>
      <div className='left-column'>
        <div className='nav-section'>
          <NavigationList />
        </div>
        <div className='select-team'>
          <BarItem mouseUpHandler={ShowHomePage}>{t('Your Armies')}</BarItem>
          <ArmyList armies={state.userArmies} />
          <BarItem mouseUpHandler={ShowCreateArmyPage}><Plus /></BarItem>
        </div>
      </div>
      <div className='army-column'>
        {children}
      </div>
      <div className='right-column'>
        <div className='action-section'>
          {t('Actions')}
        </div>
        <div className='chat-section'>
          {t('Chat')}
        </div>
      </div>
    </div>
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
      getArmies().then((result) => {
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
