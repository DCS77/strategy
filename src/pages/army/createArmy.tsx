import React, { useEffect, useState, useRef } from 'react';
import '../page.css';
import '../../App.css';
import ArmyPage from '../../components/army/armyPage';
import ArmyPieceCounts from '../../components/army/armyPieceCounts/armyPieceCounts';
import PieceButtons from '../../components/army/pieceButtons/pieceButtons';
import PieceDescription from '../../components/army/pieceDescription/pieceDescription';
import { AddPiece, CountPoints, RemovePiece, Piece } from '../../components/army/pieces';
import { Army as ArmyType, CreateArmyMutation, DeleteArmyInput, DeleteArmyMutation, PieceType, UpdateArmyInput } from '../../API';
import { TabType } from '../../types';
import tc from '../../localesComplex/translateArmy';
import i18n from '../../i18nextConf';
import { useTranslation } from 'react-i18next';
import { useStateValue } from '../../state/state';
import { createArmy, deleteArmy, updateArmy } from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';

interface CreatePageProps {
  army?: ArmyType;
}

interface ArmyProps {
  army?: ArmyType;
}

function CreatePage(Props: CreatePageProps) {
  const {dispatch} = useStateValue();
  const [selectedPiece, updateSelectedPiece] = useState<PieceType | undefined>(undefined);
  const [pieces, updatePieces] = useState<Piece[]>([]);
  const [points, updatePoints] = useState<number>(50);
  const [armyID, updateArmyID] = useState<string | undefined>(undefined);
  const armyName = useRef<HTMLInputElement>(null);
  const { t } = useTranslation('translation', { i18n });

  useEffect(() => {
    if(Props.army) {
      if (armyName.current !== null) {
        armyName.current.value = Props.army.name;
      }
      updateArmyID(Props.army.id);
      updatePieces(Props.army.pieces);
      updatePoints(50 - CountPoints(Props.army.pieces));
    }
  }, [Props]);

  async function CreateArmyDB(army: ArmyType) {
    try {
      return await API.graphql(graphqlOperation(createArmy, {input: army})) as GraphQLResult<CreateArmyMutation>;
    }
    catch(error) {
      return undefined;
    }
  }

  async function UpdateArmyDB(id: string, name: string, pieces: Piece[]) {
    try {
      const update = {id: id, name: name, pieces: pieces} as UpdateArmyInput;
      return await API.graphql(graphqlOperation(updateArmy, { input: update })) as GraphQLResult<CreateArmyMutation>;
    }
    catch(error) {
      return undefined;
    }
  }

  async function DeleteArmyDB(id: string) {
    try {
      const deleteInput = {id: id} as DeleteArmyInput;
      return await API.graphql(graphqlOperation(deleteArmy, { input: deleteInput })) as GraphQLResult<DeleteArmyMutation>;
    }
    catch(error) {
      return undefined;
    }
  }

  function UpdateArmyPiecePoints(pieces: Piece[], points: number) {
    updatePieces(pieces);
    updatePoints(points);
  }

  function SelectPiece(type: PieceType) {
    updateSelectedPiece(type);
  }

  function SaveArmy(pieces: Piece[]) {
    if (pieces && armyName.current !== null) {
      const name = armyName.current.value;
      if(name) {
        let localArmyID = armyID;
        if(!localArmyID) {
          let newArmy = {
            name: name,
            pieces: pieces,
            player: 'PlayerID',
            wins: 0,
            losses: 0
          } as ArmyType;

          CreateArmyDB(newArmy).then(result => {
            if(result) {
              localArmyID = result?.data?.createArmy?.id;
              updateArmyID(localArmyID);
            } else {
              // Print error
            }

            dispatch({
              type: 'addUserArmy',
              value: {
                id: localArmyID,
                name: name,
                pieces:  pieces
              }
            });
          });
          updateArmyID('newgame');
        } else {
          UpdateArmyDB(localArmyID, armyName.current.value, pieces);

          dispatch({
            type: 'addUserArmy',
            value: {
              id: localArmyID,
              name: name,
              pieces:  pieces
            }
          });
        }

        // Save army/name
      } else {
        // Print name blank message
      }
    }
  }

  function DeleteArmy(id: string) {
    if(armyID) {
      DeleteArmyDB(armyID);

      dispatch({
        type: 'deleteUserArmy',
        value: {
          id: id
        }
      });
    }
  }

  return (
  <React.Fragment>
    <div>
      <h1>{Props.army ? t('Edit Army') : t('Create an Army')}</h1>
      {t('SelectPiecesUse50Points')}
    </div>
    
    <div className='pieceRow'>
      <br/>
      <div>
        <input className='heading-input padding-left' type='text' placeholder='Enter name for team...' ref={armyName}/>
        <h3 className='padding-left'>{tc('PointsRemaining', points)}</h3>
        <div className='armyContainer'>
          <ArmyPieceCounts
            id={armyID}
            pieces={pieces}
            removePiece={(type: PieceType) => RemovePiece(points, pieces, type, UpdateArmyPiecePoints)}
            saveArmy={SaveArmy}
            deleteArmy={DeleteArmy}/>
        </div>
      </div>
      <br/>
      <div className='column30'>
        <PieceButtons selectPiece={SelectPiece}/>
      </div>
      <div className='column70'>
        <PieceDescription
          type={selectedPiece}
          addPiece={(type: PieceType) => AddPiece(points, pieces, type, UpdateArmyPiecePoints)}
        />
      </div>
    </div>
  </React.Fragment>)
}

function CreateArmy(Props: ArmyProps) {
  const { dispatch } = useStateValue();
  const { t } = useTranslation('translation', { i18n });

  useEffect(() => {
    if(!Props.army) {
      dispatch({
        type: 'addTab',
        value: { 
          id: 'create', path: `/create`, title: t('Create an Army'), type: TabType.Create
        }
      });
    }
    else {
      dispatch({
        type: 'addTab',
        value: { 
          id: Props.army.id, path: `/army/${Props.army.id}`, title: t(`Edit ${Props.army.name}`), type: TabType.Edit
        }
      });
    }
  }, [dispatch, Props, t]);

  return (
    <ArmyPage>
      <CreatePage army={Props.army}/>
    </ArmyPage>
  )
};

export default CreateArmy;