import React, { useEffect, useState } from 'react';
import '../page.css';
import '../../App.css';
import ArmyPage from '../../components/army/armyPage';
import ArmyPieceCounts from '../../components/army/armyPieceCounts/armyPieceCounts';
import PieceButtons from '../../components/army/pieceButtons/pieceButtons';
import PieceDescription from '../../components/army/pieceDescription/pieceDescription';
import { AddPiece, RemovePiece, Piece } from '../../components/army/pieces';
import { PieceType } from '../../API';
import { TabType } from '../../types';
import tc from '../../localesComplex/translateArmy';
import i18n from '../../i18nextConf';
import { useTranslation } from 'react-i18next';

interface ArmyProps {
  createTab: (ID: string, path: string, title: string, type: TabType) => void;
}

function CreatePage() {
  const [selectedPiece, updateSelectedPiece] = useState<PieceType | undefined>(undefined);
  const [pieces, updatePieces] = useState<Piece[]>([]);
  const [points, updatePoints] = useState<number>(50);
  const { t } = useTranslation('translation', { i18n });

  function UpdateArmy(pieces: Piece[], points: number) {
    updatePieces(pieces);
    updatePoints(points);
  }

  function SelectPiece(type: PieceType) {
    updateSelectedPiece(type);
  }

  return (
  <React.Fragment>
    <div>
      <h1>{t('Create an Army')}</h1>
      {t('SelectPiecesUse50Points')}
    </div>
    
    <div className='pieceRow'>
      <br/>
      <div className=''>
        <h3>{tc('PointsRemaining', points)}</h3>
        <div className='armyContainer'>
          <ArmyPieceCounts
            pieces={pieces}
            removePiece={(type: PieceType) => RemovePiece(points, pieces, type, UpdateArmy)}/>
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
    Props.createTab('create', 'create', t('Create an Army'), TabType.Create);
  }, [Props, t]);

  return (
    <ArmyPage>
      <CreatePage/>
    </ArmyPage>
  )
};

export default CreateArmy;