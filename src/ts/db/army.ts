import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import { getArmy, listArmies } from '../../graphql/queries';
import { createArmy, deleteArmy, updateArmy } from '../../graphql/mutations';
import {
  Army as ArmyType,
  CreateArmyMutation,
  DeleteArmyInput,
  DeleteArmyMutation,
  GetArmyQuery,
  ListArmiesQuery,
  UpdateArmyInput,
} from '../../API';
import { Piece } from '../../components/army/pieces';

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

export async function addArmy(army: ArmyType) {
  try {
    return await API.graphql(graphqlOperation(createArmy, { input: army })) as GraphQLResult<CreateArmyMutation>;
  } catch (error) {
    return undefined;
  }
}

export async function modifyArmy(id: string, newName: string, newPieces: Piece[]) {
  try {
    const update = { id, name: newName, pieces: newPieces } as UpdateArmyInput;
    return await API.graphql(graphqlOperation(updateArmy, { input: update })) as GraphQLResult<CreateArmyMutation>;
  } catch (error) {
    return undefined;
  }
}

export async function removeArmy(id: string) {
  try {
    const deleteInput = { id } as DeleteArmyInput;
    return await API.graphql(
      graphqlOperation(deleteArmy, { input: deleteInput }),
    ) as GraphQLResult<DeleteArmyMutation>;
  } catch (error) {
    return undefined;
  }
}
