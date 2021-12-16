import React from 'react';
import BarItem from '../../../components/items/barItem';
import { PieceType } from '../../../API';
import { EnvelopeSimple, Jeep, PersonSimpleWalk, Storefront, Sword, Wall } from 'phosphor-react';
import i18n from '../../../i18nextConf';
import { useTranslation } from 'react-i18next';

interface PieceButtonsProps {
  selectPiece: (type: PieceType) => void;
}

function PieceButtons(Props: PieceButtonsProps) {
  const { t } = useTranslation('translation', { i18n });

  return (
    <React.Fragment>
      <h3>Pieces</h3>
      <BarItem largeButtons={true} mouseUpHandler={() => Props.selectPiece(PieceType.adventurer)}>
        <span className='inline flex-center all-spaced'><PersonSimpleWalk/> {t('Adventurer')}</span>
      </BarItem>
      <BarItem largeButtons={true} mouseUpHandler={() => Props.selectPiece(PieceType.commoner)}>
        <span className='inline flex-center all-spaced'><Storefront/> {t('Commoner')}</span>
      </BarItem>
      <BarItem largeButtons={true} mouseUpHandler={() => Props.selectPiece(PieceType.engineer)}>
        <span className='inline flex-center all-spaced'><Wall/> {t('Engineer')}</span>
      </BarItem>
      <BarItem largeButtons={true} mouseUpHandler={() => Props.selectPiece(PieceType.knight)}>
        <span className='inline flex-center all-spaced'><Sword/> {t('Knight')}</span>
      </BarItem>
      <BarItem largeButtons={true} mouseUpHandler={() => Props.selectPiece(PieceType.messenger)}>
        <span className='inline flex-center all-spaced'><EnvelopeSimple/> {t('Messenger')}</span>
      </BarItem>
      <BarItem largeButtons={true} mouseUpHandler={() => Props.selectPiece(PieceType.smuggler)}>
        <span className='inline flex-center all-spaced'><Jeep/> {t('Smuggler')}</span>
      </BarItem>
    </React.Fragment>
  )
}

export default PieceButtons;