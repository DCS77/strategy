import React, { useEffect, useState } from 'react';
import '../page.css';
import '../../App.css';
import ArmyPage from '../../components/army/armyPage';
import { TabType } from '../../types';
import { listArmies } from '../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import { Army as ArmyType, ListArmiesQuery } from '../../API';
import { GraphQLResult } from '@aws-amplify/api';

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
  if(Props.ID){
    return <SelectedArmy ID={Props.ID}/>
  }

  return (
  <React.Fragment>
    <div>
      <h1>Your Armies</h1>
      You have {Props.armies.length} armies.
      {Props.armies.length ?
        ` Select one to view and edit, or click the Plus (+) button to create a new one.` :
        ` Click the Plus (+) button on the side to get started.`}
    </div>
  </React.Fragment>)
}

function Army(Props: ArmyProps) {
  const [armies, updateArmies] = useState<ArmyType[]>([]);

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
    Props.createTab('army', 'army', 'Your Army', TabType.Army);

    let isMounted = true;
    getPageData().then(result => {
      if (isMounted) updateArmies(result ? result : []);
    });
    return () => { isMounted = false };
  }, [Props]);

  return (
    <ArmyPage>
      <CentrePage armies={armies} ID={Props.ID}/>
    </ArmyPage>
  )
};

export default Army;