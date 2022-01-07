import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import { listArmies } from '../graphql/queries';
import { ListArmiesQuery } from '../API';

// eslint-disable-next-line import/prefer-default-export
export async function getArmies() {
  const armyData = (await API.graphql(graphqlOperation(listArmies))) as GraphQLResult<ListArmiesQuery>;
  return armyData?.data?.listArmies?.items;
}
