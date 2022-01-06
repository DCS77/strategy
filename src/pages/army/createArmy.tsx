import React, { useEffect, useState, useRef } from 'react';
import '../page.css';
import '../../App.css';
import { useTranslation } from 'react-i18next';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import ArmyPage from '../../components/army/armyPage';
import ArmyPieceCounts from '../../components/army/armyPieceCounts/armyPieceCounts';
import PieceButtons from '../../components/army/pieceButtons/pieceButtons';
import PieceDescription from '../../components/army/pieceDescription/pieceDescription';
import {
  AddPiece, CountPoints, RemovePiece, Piece,
} from '../../components/army/pieces';
import {
  Army as ArmyType, CreateArmyMutation, DeleteArmyInput, DeleteArmyMutation, PieceType, UpdateArmyInput,
} from '../../API';
import { TabType } from '../../types';
import tc from '../../localesComplex/translateArmy';
import i18n from '../../i18nextConf';
import { useStateValue } from '../../state/state';
import { createArmy, deleteArmy, updateArmy } from '../../graphql/mutations';

interface CreatePageProps {
  army?: ArmyType;
}

interface ArmyProps {
  army?: ArmyType;
}

const CreatePage = (Props: CreatePageProps) => {
  const { dispatch } = useStateValue();
  const [selectedPiece, updateSelectedPiece] = useState<PieceType | undefined>(undefined);
  const [pieces, updatePieces] = useState<Piece[]>([]);
  const [points, updatePoints] = useState<number>(50);
  const [armyID, updateArmyID] = useState<string | undefined>(undefined);
  const armyName = useRef<HTMLInputElement>(null);
  const { t } = useTranslation('translation', { i18n });
  const { army } = Props;

  useEffect(() => {
    if (army) {
      if (armyName.current !== null) {
        armyName.current.value = army.name;
      }
      updateArmyID(army.id);
      updatePieces(army.pieces);
      updatePoints(50 - CountPoints(army.pieces));
    }
  }, [Props]);

  async function CreateArmyDB(newArmy: ArmyType) {
    try {
      return await API.graphql(graphqlOperation(createArmy, { input: newArmy })) as GraphQLResult<CreateArmyMutation>;
    } catch (error) {
      return undefined;
    }
  }

  async function UpdateArmyDB(id: string, newName: string, newPieces: Piece[]) {
    try {
      const update = { id, name: newName, pieces: newPieces } as UpdateArmyInput;
      return await API.graphql(graphqlOperation(updateArmy, { input: update })) as GraphQLResult<CreateArmyMutation>;
    } catch (error) {
      return undefined;
    }
  }

  async function DeleteArmyDB(id: string) {
    try {
      const deleteInput = { id } as DeleteArmyInput;
      return await API.graphql(
        graphqlOperation(deleteArmy, { input: deleteInput }),
      ) as GraphQLResult<DeleteArmyMutation>;
    } catch (error) {
      return undefined;
    }
  }

  function UpdateArmyPiecePoints(newPieces: Piece[], newPoints: number) {
    updatePieces(newPieces);
    updatePoints(newPoints);
  }

  function SelectPiece(type: PieceType) {
    updateSelectedPiece(type);
  }

  function SaveArmy(newPieces: Piece[]) {
    if (newPieces && armyName.current !== null) {
      const name = armyName.current.value;
      if (name) {
        let localArmyID = armyID;
        if (!localArmyID) {
          const newArmy = {
            name,
            pieces: newPieces,
            player: 'PlayerID',
            wins: 0,
            losses: 0,
          } as ArmyType;

          CreateArmyDB(newArmy).then((result) => {
            if (result) {
              localArmyID = result?.data?.createArmy?.id;
              updateArmyID(localArmyID);
            } else {
              // Print error
            }

            dispatch({
              type: 'addUserArmy',
              value: {
                id: localArmyID,
                name,
                pieces: newPieces,
              },
            });
          });
          updateArmyID('newgame');
        } else {
          UpdateArmyDB(localArmyID, armyName.current.value, newPieces);

          dispatch({
            type: 'addUserArmy',
            value: {
              id: localArmyID,
              name,
              pieces: newPieces,
            },
          });
        }

        // Save army/name
      } else {
        // Print name blank message
      }
    }
  }

  function DeleteArmy(id: string) {
    if (armyID) {
      DeleteArmyDB(armyID);

      dispatch({
        type: 'deleteUserArmy',
        value: {
          id,
        },
      });
    }
  }

  return (
    <>
      <div>
        <h1>{army ? t('Edit Army') : t('Create an Army')}</h1>
        {t('SelectPiecesUse50Points')}
      </div>

      <div className='piece-row'>
        <br />
        <div>
          <input
            className='heading-input padding-left'
            type='text'
            placeholder='Enter name for team...'
            ref={armyName}
          />
          <h3 className='padding-left'>{tc('PointsRemaining', points)}</h3>
          <div className='army-container'>
            <ArmyPieceCounts
              id={armyID}
              pieces={pieces}
              removePiece={(type: PieceType) => RemovePiece(points, pieces, type, UpdateArmyPiecePoints)}
              saveArmy={SaveArmy}
              deleteArmy={DeleteArmy}
            />
          </div>
        </div>
        <br />
        <div className='column-30'>
          <PieceButtons selectPiece={SelectPiece} />
        </div>
        <div className='column-70'>
          <PieceDescription
            type={selectedPiece}
            addPiece={(type: PieceType) => AddPiece(points, pieces, type, UpdateArmyPiecePoints)}
          />
        </div>
      </div>
    </>
  );
};

const CreateArmy = (Props: ArmyProps) => {
  const { dispatch } = useStateValue();
  const { t } = useTranslation('translation', { i18n });
  const { army } = Props;

  useEffect(() => {
    if (!army) {
      document.title = 'RC | Create an army';
      dispatch({
        type: 'addTab',
        value: {
          id: 'create', path: '/create', title: t('Create an Army'), type: TabType.Create,
        },
      });
    } else {
      document.title = `RC | Army: ${army.name}`;
      dispatch({
        type: 'addTab',
        value: {
          id: army.id, path: `/army/${army.id}`, title: t(`Edit ${army.name}`), type: TabType.Edit,
        },
      });
    }
  }, [dispatch, Props, t]);

  return (
    <ArmyPage>
      <CreatePage army={army} />
    </ArmyPage>
  );
};

export default CreateArmy;
