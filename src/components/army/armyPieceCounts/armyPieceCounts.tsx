import React, { useState, useEffect } from 'react';
import BarItem from '../../items/barItem';
import { PieceIcon, Piece, PieceCharacter } from '../pieces';
import { PieceType } from '../../../API';
import i18n from '../../../i18nextConf';
import { useTranslation } from 'react-i18next';

interface ArmyPiecesProps {
  id?: string;
  pieces: Piece[];
  removePiece?: (type: PieceType) => void;
  saveArmy?: (pieces: Piece[]) => void;
  deleteArmy?: (id: string) => void;
}

interface ArmyPieceCountProps {
  piece: Piece;
  removePiece: (type: PieceType) => void;
}

function ArmyPieceCount(Props: ArmyPieceCountProps){
  return (
    <BarItem mouseUpHandler={() => Props.removePiece(Props.piece.type)} disableStyle={true}>
      <span className='wide-screen'>
        <span title={Props.piece.type} className='bar-spaced pieceContainer'>
          {PieceIcon(Props.piece.type)} {Props.piece.count}</span>
      </span>
      <span className='narrow-screen'>
        <span title={Props.piece.type} className='bar-spaced narrowPieceContainer'>
          {PieceIcon(Props.piece.type)} {Props.piece.count}</span>
      </span>
    </BarItem>
  );
}

export function ArmyPieceCounts(Props: ArmyPiecesProps) {
  const [copyText, updateCopyText] = useState('Copy');
  const [saveText, updateSaveText] = useState('Save');
  const { t } = useTranslation('translation', { i18n });

  useEffect(() => {
    updateCopyText('Copy');
    updateSaveText('Save');
  }, [Props]);

  function CopyPiecesToClipboard(pieces: Piece[]) {
    let pieceText = pieces.map(function(piece) {
      return `${PieceCharacter(piece.type)}${piece.count}`;
    }).join(' ');
    navigator.clipboard.writeText(pieceText);
    updateCopyText('Copied!');
  }

  function SaveArmy() {
    if(Props.saveArmy) {
      Props.saveArmy(Props.pieces);
      updateSaveText('Saved!');
    }
  }

  function DeleteArmy() {
    if(Props.id && Props.deleteArmy) {
      Props.deleteArmy(Props.id);
    }
  }

  function DeleteButton() {
    if(Props.id && Props.deleteArmy) {
      return (
        <BarItem mouseUpHandler={() => DeleteArmy()} disableStyle={true}>
          <span className='pieceContainer'>Delete</span>
        </BarItem>
      )
    }
    return null;
  }
  
  if(Props.pieces.length === 0) {
    return (<div>{t('You have not added any pieces.')}</div>);
  }

  return (
    <span className='pieceCounts'>
      <span className='left-group scroll-x'>
        { Props.pieces.map((piece: Piece) => 
          <ArmyPieceCount
            key={piece.type}
            piece={piece}
            removePiece={Props.removePiece ? Props.removePiece : () => {}}/>
          ) }
      </span>
      <span className='right-group'>
        <BarItem mouseUpHandler={() => CopyPiecesToClipboard(Props.pieces)} disableStyle={true}>
          <span className='pieceContainer'>{copyText}</span>
        </BarItem>
        <BarItem mouseUpHandler={() => SaveArmy()} disableStyle={true}>
          <span className='pieceContainer'>{saveText}</span>
        </BarItem>
        <DeleteButton/>
      </span>
    </span>
  );
}

export default ArmyPieceCounts;