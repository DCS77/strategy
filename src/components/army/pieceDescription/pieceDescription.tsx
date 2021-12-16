import React from 'react';
import BarItem from '../../items/barItem';
import { PieceType } from '../../../API';
import i18n from '../../../i18nextConf';
import { useTranslation } from 'react-i18next';

interface PieceDescriptionProps {
  type?: PieceType;
  addPiece: (type: PieceType) => void;
}

function PieceDescription(Props: PieceDescriptionProps) {
  const { t } = useTranslation('translation', { i18n });
  
  switch(Props.type) {
    case PieceType.adventurer:
      return (
        <div className='padded'>
          <h3>{t('Adventurer')}</h3>
          <p>The adventurer is balanced in strength and speed.</p>
          <p><b>{t('Strength')}</b> 3</p>
          <p><b>{t('Speed')}</b> 3 <i>(cells per turn)</i></p>
          <p><b>{t('Abilities')} </b> No special abilities.</p>
          <BarItem largeButtons={true} standout={true} mouseUpHandler={() => Props.addPiece(PieceType.adventurer)}>
            <span className='inline flex-center all-spaced'>{t('Add')} (6{t('points')})</span>
          </BarItem>
        </div>
      );
    case PieceType.commoner:
      return (
        <div className='padded'>
          <h3>{t('Commoner')}</h3>
          <p>Commoners are cheap, but are not strong enough to finish off enemies by themselves.</p>
          <p><b>{t('Strength')}</b> 1</p>
          <p><b>{t('Speed')}</b> 3 <i>(cells per turn, forward movements only)</i></p>
          <b>{t('Abilities')}</b>
          <p>When a commoner enters a cell with enemies, a battle doesn't instantly occur.</p>
          <p>A battle only occurs when a non-commoner piece of yours enters the cell.</p>
          <p>Additonally, commoners return to your piece pool after losing a battle.</p>
          <BarItem largeButtons={true} standout={true} mouseUpHandler={() => Props.addPiece(PieceType.commoner)}>
            <span className='inline flex-center all-spaced'>{t('Add')} (1 {t('point')})</span>
          </BarItem>
        </div>
      );
      case PieceType.engineer:
        return (
          <div className='padded'>
            <h3>{t('Engineer')}</h3>
            <p>Engineers are not strong but provide a tactical advantage on the battlefield.</p>
            <p><b>{t('Strength')}</b> 1</p>
            <p><b>{t('Speed')}</b> 1 <i>(cell per turn, foward movements only)</i></p>
            <b>{t('Abilities')}</b>
            <p>Engineers can build walls to slow down opponents.</p>
            <p>Your walls can be scaled by any piece, but slow down the enemies by 3 of their remaining moves.</p>
            <p>Enemy pieces are also strength 1 while on cells with a wall of yours.</p>
            <p>They are expended after building a wall.</p>
            <BarItem largeButtons={true} standout={true} mouseUpHandler={() => Props.addPiece(PieceType.engineer)}>
              <span className='inline flex-center all-spaced'>{t('Add')} (4{t('points')})</span>
            </BarItem>
          </div>
        );
      case PieceType.knight:
        return (
          <div className='padded'>
            <h3>{t('Knight')}</h3>
            <p>Knights are strong and fast.</p>
            <p><b>{t('Strength')}</b> 5</p>
            <p><b>{t('Speed')}</b> 3 <i>(cells per turn)</i></p>
            <p><b>{t('Abilities')} </b>No special abilities.</p>
            <BarItem largeButtons={true} standout={true} mouseUpHandler={() => Props.addPiece(PieceType.knight)}>
              <span className='inline flex-center all-spaced'>{t('Add')} (8{t('points')})</span>
            </BarItem>
          </div>
        );
      case PieceType.messenger:
        return (
          <div className='padded'>
            <h3>{t('Messenger')}</h3>
            <p>Messengers are fast but weak.</p>
            <p><b>{t('Strength')}</b> 1</p>
            <p><b>{t('Speed')}</b> 4 <i>(cells per turn)</i></p>
            <p><b>{t('Abilities')} </b>No special abilities.</p>
            <BarItem largeButtons={true} standout={true} mouseUpHandler={() => Props.addPiece(PieceType.messenger)}>
              <span className='inline flex-center all-spaced'>{t('Add')} (2{t('points')})</span>
            </BarItem>
          </div>
        );
      case PieceType.smuggler:
        return (
          <div className='padded'>
            <h3>{t('Smuggler')}</h3>
            <p>Smugglers have the means of transporting pieces, but cannot protect you from enemies.</p>
            <p><b>{t('Strength')}</b> 1</p>
            <p><b>{t('Speed')}</b> 4 <i>(cells per turn)</i></p>
            <b>{t('Abilities')}</b>
            <p>When you move a smuggler, you can choose to transport up to 4 other pieces. The other pieces must be on the same cell as the smuggler.</p>
            <p>Pieces sharing a cell with their smuggler all have strength 1.</p>
            <BarItem largeButtons={true} standout={true} mouseUpHandler={() => Props.addPiece(PieceType.smuggler)}>
              <span className='inline flex-center all-spaced'>{t('Add')} (8{t('points')})</span>
            </BarItem>
          </div>
        );
    default:
      return (
        <div className='padded'>
          {t('SelectPieceToSeeDetailsAddToArmy')}
        </div>);
  }
}

export default PieceDescription;