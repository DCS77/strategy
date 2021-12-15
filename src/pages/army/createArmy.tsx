import React, { useEffect, useState } from 'react';
import '../page.css';
import '../../App.css';
import ArmyPage from '../../components/army/armyPage';
import PieceButtons from '../../components/army/pieceButtons/pieceButtons';
import PieceDescription from '../../components/army/pieceDescription/pieceDescription';
import { AddPiece, GetPieceIcon, Piece } from '../../components/army/pieces';
import { PieceType } from '../../API';
import { TabType } from '../../types';

interface ArmyProps {
  createTab: (ID: string, path: string, title: string, type: TabType) => void;
}

interface CurrentArmyPiecesProps {
  pieces: Piece[];
}

function ArmyPieceCount(piece: Piece){
  return (
    <span key={piece.type} title={piece.type} className='bar-spaced pieceContainer'>{GetPieceIcon(piece.type)} {piece.count}</span>
  );
}

function CurrentArmyPieces(Props: CurrentArmyPiecesProps) {
  if(Props.pieces.length === 0) {
    return (<div>You have not added any pieces.</div>);
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
      <h1>Create an Army</h1>
      Select the pieces you want. Use up to 50 points per team.
    </div>
    
    <div className='pieceRow'>
      <br/>
      <div className=''>
        <h3>{points} points remaining</h3>
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
  useEffect(() => {
    Props.createTab('create', 'create', 'Create an Army', TabType.Create);
  }, [Props]);

  return (
    <ArmyPage>
      <CreatePage/>
    </ArmyPage>
  )
};

export default CreateArmy;