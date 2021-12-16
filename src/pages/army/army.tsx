import React, { useEffect, useState } from 'react';
import '../page.css';
import '../../App.css';
import ArmyPage from '../../components/army/armyPage';
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
  armies: ArmyType[];
}

interface SelectedArmyProps {
  ID: string;
  army?: ArmyType[];
}

function SelectedArmy(Props: SelectedArmyProps) {
  return (
    <div>Selected army: {Props.ID}</div>
  )
}

function CentrePage(Props: CentrePageProps) {
  const { t } = useTranslation('translation', { i18n });

  if(Props.ID){
    return <SelectedArmy ID={Props.ID}/>
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

function Army(Props: ArmyProps) {
  const [armies, updateArmies] = useState<ArmyType[]>([]);
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
      if (isMounted) updateArmies(result ? result : []);
    });
    return () => { isMounted = false };
  }, [Props, t]);

  return (
    <ArmyPage>
      <CentrePage armies={armies} ID={Props.ID}/>
    </ArmyPage>
  )
};

export default Army;