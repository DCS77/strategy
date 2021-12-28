import React from 'react';
import {
  EnvelopeSimple, Jeep, PersonSimpleWalk, Storefront, Sword, Wall,
} from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import BarItem from '../../items/barItem';
import { PieceType } from '../../../API';
import i18n from '../../../i18nextConf';

interface PieceButtonsProps {
  selectPiece: (type: PieceType) => void;
}

const PieceButtons = (Props: PieceButtonsProps) => {
  const { t } = useTranslation('translation', { i18n });
  const { selectPiece } = Props;

  return (
    <>
      <h3>Pieces</h3>
      <BarItem largeButtons mouseUpHandler={() => selectPiece(PieceType.adventurer)}>
        <span className='inline flex-center all-spaced'>
          <PersonSimpleWalk />
          {' '}
          {t('Adventurer')}
        </span>
      </BarItem>
      <BarItem largeButtons mouseUpHandler={() => selectPiece(PieceType.commoner)}>
        <span className='inline flex-center all-spaced'>
          <Storefront />
          {' '}
          {t('Commoner')}
        </span>
      </BarItem>
      <BarItem largeButtons mouseUpHandler={() => selectPiece(PieceType.engineer)}>
        <span className='inline flex-center all-spaced'>
          <Wall />
          {' '}
          {t('Engineer')}
        </span>
      </BarItem>
      <BarItem largeButtons mouseUpHandler={() => selectPiece(PieceType.knight)}>
        <span className='inline flex-center all-spaced'>
          <Sword />
          {' '}
          {t('Knight')}
        </span>
      </BarItem>
      <BarItem largeButtons mouseUpHandler={() => selectPiece(PieceType.messenger)}>
        <span className='inline flex-center all-spaced'>
          <EnvelopeSimple />
          {' '}
          {t('Messenger')}
        </span>
      </BarItem>
      <BarItem largeButtons mouseUpHandler={() => selectPiece(PieceType.smuggler)}>
        <span className='inline flex-center all-spaced'>
          <Jeep />
          {' '}
          {t('Smuggler')}
        </span>
      </BarItem>
    </>
  );
};

export default PieceButtons;
