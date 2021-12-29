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
  removePiece?: (type: PieceType) => void;
}

const ArmyPieceCount = (Props: ArmyPieceCountProps) => {
  const { piece, removePiece } = Props;
  return (
    <BarItem mouseUpHandler={removePiece ? () => removePiece(piece.type) : undefined} disableStyle>
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

interface SaveProps {
  id?: string;
  pieces: Piece[];
  saveArmy?: (pieces: Piece[]) => void;
  saveText: string;
  updateSaveText: any;
}

function SaveArmy(Props: SaveProps) {
  const { pieces, saveArmy, updateSaveText } = Props;
  if (saveArmy) {
    saveArmy(pieces);
    updateSaveText('Saved!');
  }
}

const SaveButton = (Props: SaveProps) => {
  const { saveArmy, saveText } = Props;
  if (saveArmy) {
    return (
      <BarItem mouseUpHandler={() => SaveArmy(Props)} disableStyle>
        <span className='pieceContainer'>{saveText}</span>
      </BarItem>
    );
  }
  return null;
};

interface DeleteProps {
  id?: string;
  deleteArmy?: (id: string) => void;
}

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
            removePiece={removePiece}
          />
        )) }
      </span>
      <span className='right-group'>
        <BarItem mouseUpHandler={() => CopyPiecesToClipboard(pieces)} disableStyle>
          <span className='pieceContainer'>{copyText}</span>
        </BarItem>
        <SaveButton id={id} pieces={pieces} saveArmy={saveArmy} saveText={saveText} updateSaveText={updateSaveText} />
        <DeleteButton id={id} deleteArmy={deleteArmy} />
      </span>
    </span>
  );
};

export default ArmyPieceCounts;
