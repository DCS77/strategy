import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import { getArmy, listArmies } from '../graphql/queries';
import { GetArmyQuery, ListArmiesQuery } from '../API';

export async function fetchArmy(id: string) {
  const armyData = (await API.graphql(graphqlOperation(getArmy, { id }))) as GraphQLResult<GetArmyQuery>;
  return armyData?.data?.getArmy;
}

export async function fetchArmies() {
  const armyData = (await API.graphql(graphqlOperation(listArmies))) as GraphQLResult<ListArmiesQuery>;
  return armyData?.data?.listArmies?.items;
}

export async function fetchUserArmies(username: string) {
  const armyData = (await API.graphql(graphqlOperation(listArmies, {
    filter: {
      owner: { eq: username },
    },
  }))) as GraphQLResult<ListArmiesQuery>;
  return armyData?.data?.listArmies?.items;
}
