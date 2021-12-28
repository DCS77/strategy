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
import { useStateValue } from '../../state/state';
import i18n from '../../i18nextConf';

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

export default ArmyPage;
