import React, { useState, useEffect } from 'react';
import BarItem from '../../items/barItem';
import { PieceIcon, Piece, PieceCharacter } from '../pieces';
import { PieceType } from '../../../API';
import i18n from '../../../i18nextConf';
import { useTranslation } from 'react-i18next';

interface ArmyPiecesProps {
  pieces: Piece[];
  removePiece: (type: PieceType) => void;
}

interface ArmyPieceCountProps {
  piece: Piece;
  removePiece: (type: PieceType) => void;
}

function ArmyPieceCount(Props: ArmyPieceCountProps){
  return (
    <BarItem mouseUpHandler={() => Props.removePiece(Props.piece.type)} disableStyle={true}>
      <span title={Props.piece.type} className='bar-spaced pieceContainer'>
        {PieceIcon(Props.piece.type)} {Props.piece.count}</span>
    </BarItem>
  );
}

export function ArmyPieceCounts(Props: ArmyPiecesProps) {
  const [copyText, updateCopyText] = useState('Copy');
  const { t } = useTranslation('translation', { i18n });

  useEffect(() => {
    updateCopyText('Copy');
  }, [Props]);

  function CopyPiecesToClipboard(pieces: Piece[]) {
    let pieceText = pieces.map(function(piece) {
      return `${PieceCharacter(piece.type)}${piece.count}`;
    }).join(' ');
    navigator.clipboard.writeText(pieceText);
    updateCopyText('Copied!');
  }
  
  if(Props.pieces.length === 0) {
    return (<div>{t('NoPiecesAdded')}</div>);
  }

  return (
    <span className='pieceCounts'>
      <span className='left-group'>
        { Props.pieces.map((piece: Piece) => <ArmyPieceCount key={piece.type} piece={piece} removePiece={Props.removePiece}/>) }
      </span>
      <span className='right-group'>
        <BarItem mouseUpHandler={() => CopyPiecesToClipboard(Props.pieces)} disableStyle={true}>
          <span className='pieceContainer'>{copyText}</span>
        </BarItem>
      </span>
    </span>
  );
}

export default ArmyPieceCounts;