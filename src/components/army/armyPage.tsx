import React, { useEffect, useState } from 'react';
import '../../pages/page.css';
import '../../App.css';
import BarItem from '../items/barItem';
import NavigationList from '../navigation/navigationList';
import ArmyList from './armyList/armyList';
import { listArmies } from '../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import { Army as ArmyType, ListArmiesQuery } from '../../API';
import { GraphQLResult } from '@aws-amplify/api';
import { Plus } from 'phosphor-react';
import { useHistory } from 'react-router-dom';
import i18n from '../../i18nextConf';
import { useTranslation } from 'react-i18next';

interface ArmyPageProps {
  children: React.ReactNode;
}

function ArmyPage(Props: ArmyPageProps) {
  const [armies, updateArmies] = useState<ArmyType[]>([]);
  const history = useHistory();
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
    let isMounted = true;
    getPageData().then(result => {
      if (isMounted) updateArmies(result ? result : []);
    });
    return () => { isMounted = false };
  }, [Props]);

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
          <NavigationList/>
        </div>
        <div className='selectTeam'>
          <BarItem mouseUpHandler={ShowHomePage}>{t('Your Armies')}</BarItem>
          <ArmyList armies={armies}/>
          <BarItem mouseUpHandler={ShowCreateArmyPage}><Plus/></BarItem>
        </div>
      </div>
      <div className='armyColumn'>
        {Props.children}
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
  )
};

export default ArmyPage;