import React, { useEffect, useState } from 'react';
import '../page.css';
import '../../App.css';
import ArmyPage from '../../components/army/armyPage';
import PieceButtons from '../../components/army/pieceButtons/pieceButtons';
import PieceDescription from '../../components/army/pieceDescription/pieceDescription';
import { AddPiece, PieceIcon, Piece, PieceCharacter } from '../../components/army/pieces';
import { PieceType } from '../../API';
import { TabType } from '../../types';
import tc from '../../localesComplex/translateArmy';
import i18n from '../../i18nextConf';
import { useTranslation } from 'react-i18next';

interface ArmyProps {
  createTab: (ID: string, path: string, title: string, type: TabType) => void;
}

interface CurrentArmyPiecesProps {
  pieces: Piece[];
}

function HiddenPieceType(type: PieceType) {
  return (<span className='hidden-selectable'>{PieceCharacter(type)}</span>)
}

function ArmyPieceCount(piece: Piece){
  return (
    <span key={piece.type} title={piece.type} className='bar-spaced pieceContainer'>
      {PieceIcon(piece.type)} {HiddenPieceType(piece.type)}{piece.count}</span>
  );
}

function CurrentArmyPieces(Props: CurrentArmyPiecesProps) {
  const { t } = useTranslation('translation', { i18n });
  
  if(Props.pieces.length === 0) {
    return (<div>{t('NoPiecesAdded')}</div>);
  }

  return (
    <span>
      { Props.pieces.map((piece: Piece) => ArmyPieceCount(piece)) }
    </span>
  );
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
          <CurrentArmyPieces pieces={pieces}/>
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