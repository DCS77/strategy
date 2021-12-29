import React, { useEffect } from 'react';
import '../../pages/page.css';
import '../../App.css';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import { Plus } from 'phosphor-react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BarItem from '../items/barItem';
import NavigationList from '../navigation/navigationList';
import ArmyList from './armyList/armyList';
import { listArmies } from '../../graphql/queries';
import { ListArmiesQuery } from '../../API';
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
    <div className='full-size gameRow'>
      <div className='leftColumn'>
        <div className='navSection'>
          <NavigationList />
        </div>
        <div className='selectTeam'>
          <BarItem mouseUpHandler={ShowHomePage}>{t('Your Armies')}</BarItem>
          <ArmyList armies={state.userArmies} />
          <BarItem mouseUpHandler={ShowCreateArmyPage}><Plus /></BarItem>
        </div>
      </div>
      <div className='armyColumn'>
        {children}
      </div>
      <div className='rightColumn'>
        <div className='actionSection'>
          {t('Actions')}
        </div>
        <div className='chatSection'>
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

  async function getPageData() {
    try {
      const armyData = (await API.graphql(graphqlOperation(listArmies))) as GraphQLResult<ListArmiesQuery>;
      return armyData?.data?.listArmies?.items;
    } catch (error) {
      console.log('Error: ', error);
    }
    return [];
  }

  useEffect(() => {
    let isMounted = true;

    if (!state.fetchedData.userArmies) {
      getPageData().then((result) => {
        if (isMounted) {
          dispatch({
            type: 'setUserArmies',
            value: result || [],
          });
        }
      });
    }
    return () => { isMounted = false; };
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
