import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import BarItem from '../../items/barItem';
import { PieceIcon, Piece, PieceCharacter } from '../pieces';
import { PieceType } from '../../../API';
import i18n from '../../../i18nextConf';

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

interface DeleteProps {
  id?: string;
  deleteArmy?: (id: string) => void;
}

const ArmyPieceCount = (Props: ArmyPieceCountProps) => {
  const { piece, removePiece } = Props;
  return (
    <BarItem mouseUpHandler={() => removePiece(piece.type)} disableStyle>
      <span className='wide-screen'>
        <span title={piece.type} className='bar-spaced pieceContainer'>
          {PieceIcon(piece.type)}
          {' '}
          {piece.count}
        </span>
      </span>
      <span className='narrow-screen'>
        <span title={piece.type} className='bar-spaced narrowPieceContainer'>
          {PieceIcon(piece.type)}
          {' '}
          {piece.count}
        </span>
      </span>
    </BarItem>
  );
};

function DeleteArmy(Props: DeleteProps) {
  const { deleteArmy, id } = Props;
  if (id && deleteArmy) {
    deleteArmy(id);
  }
}

const DeleteButton = (Props: DeleteProps) => {
  const { deleteArmy, id } = Props;
  if (id && deleteArmy) {
    return (
      <BarItem mouseUpHandler={() => DeleteArmy(Props)} disableStyle>
        <span className='pieceContainer'>Delete</span>
      </BarItem>
    );
  }
  return null;
};

export const ArmyPieceCounts = (Props: ArmyPiecesProps) => {
  const [copyText, updateCopyText] = useState('Copy');
  const [saveText, updateSaveText] = useState('Save');
  const { t } = useTranslation('translation', { i18n });
  const {
    deleteArmy, id, pieces, removePiece, saveArmy,
  } = Props;

  useEffect(() => {
    updateCopyText('Copy');
    updateSaveText('Save');
  }, [Props]);

  function CopyPiecesToClipboard(piecesToCopy: Piece[]) {
    const pieceText = piecesToCopy.map((piece) => `${PieceCharacter(piece.type)}${piece.count}`).join(' ');
    navigator.clipboard.writeText(pieceText);
    updateCopyText('Copied!');
  }

  function SaveArmy() {
    if (saveArmy) {
      saveArmy(pieces);
      updateSaveText('Saved!');
    }
  }

  if (pieces.length === 0) {
    return (<div>{t('You have not added any pieces.')}</div>);
  }

  return (
    <span className='pieceCounts'>
      <span className='left-group scroll-x'>
        { pieces.map((piece: Piece) => (
          <ArmyPieceCount
            key={piece.type}
            piece={piece}
            removePiece={removePiece || (() => {})}
          />
        )) }
      </span>
      <span className='right-group'>
        <BarItem mouseUpHandler={() => CopyPiecesToClipboard(pieces)} disableStyle>
          <span className='pieceContainer'>{copyText}</span>
        </BarItem>
        <BarItem mouseUpHandler={() => SaveArmy()} disableStyle>
          <span className='pieceContainer'>{saveText}</span>
        </BarItem>
        <DeleteButton id={id} deleteArmy={deleteArmy} />
      </span>
    </span>
  );
};

export default ArmyPieceCounts;
