import React, { useEffect, useState, useRef } from 'react';
import '../page.css';
import '../../App.css';
import ArmyPage from '../../components/army/armyPage';
import ArmyPieceCounts from '../../components/army/armyPieceCounts/armyPieceCounts';
import PieceButtons from '../../components/army/pieceButtons/pieceButtons';
import PieceDescription from '../../components/army/pieceDescription/pieceDescription';
import { AddPiece, CountPoints, RemovePiece, Piece } from '../../components/army/pieces';
import { Army as ArmyType, PieceType } from '../../API';
import { TabType } from '../../types';
import tc from '../../localesComplex/translateArmy';
import i18n from '../../i18nextConf';
import { useTranslation } from 'react-i18next';

interface CreatePageProps {
  army?: ArmyType;
}

interface ArmyProps {
  army?: ArmyType;
  createTab: (ID: string, path: string, title: string, type: TabType) => void;
}

function CreatePage(Props: CreatePageProps) {
  const [selectedPiece, updateSelectedPiece] = useState<PieceType | undefined>(undefined);
  const [pieces, updatePieces] = useState<Piece[]>([]);
  const [points, updatePoints] = useState<number>(50);
  const armyName = useRef<HTMLInputElement>(null);
  const { t } = useTranslation('translation', { i18n });

  useEffect(() => {
    if(Props.army) {
      if (armyName.current !== null) {
        armyName.current.value = Props.army.name;
      }
      updatePieces(Props.army.pieces);
      updatePoints(50 - CountPoints(Props.army.pieces));
    }
  }, [Props]);

  function UpdateArmy(pieces: Piece[], points: number) {
    updatePieces(pieces);
    updatePoints(points);
  }

  function SelectPiece(type: PieceType) {
    updateSelectedPiece(type);
  }

  function SaveArmy(pieces: Piece[]) {
    if (pieces && armyName.current !== null) {
      if(armyName.current.value) {
        // Save army/name
      } else {
        // Print name blank message
      }
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
            pieces={pieces}
            removePiece={(type: PieceType) => RemovePiece(points, pieces, type, UpdateArmy)}
            saveArmy={SaveArmy}/>
        </div>
      </div>
      <br/>
      <div className='column30'>
        <PieceButtons selectPiece={SelectPiece}/>
      </div>
      <div className='column70'>
        <PieceDescription
          type={selectedPiece}
          addPiece={(type: PieceType) => AddPiece(points, pieces, type, UpdateArmy)}
        />
      </div>
    </div>
  </React.Fragment>)
}

function CreateArmy(Props: ArmyProps) {
  const { t } = useTranslation('translation', { i18n });

  useEffect(() => {
    if(!Props.army) {
      Props.createTab('create', 'create', t('Create an Army'), TabType.Create);
    }
    else {
      Props.createTab(Props.army.id, `army/${Props.army.id}`, t(`Edit ${Props.army.name}`), TabType.Edit);
    }
  }, [Props, t]);

  return (
    <ArmyPage>
      <CreatePage army={Props.army}/>
    </ArmyPage>
  )
};

export default CreateArmy;