import React from 'react';
import BarItem from '../../../components/items/barItem';
import { PieceType } from '../../../API';
import { EnvelopeSimple, Jeep, PersonSimpleWalk, Storefront, Sword, Wall } from 'phosphor-react';

interface PieceButtonsProps {
  selectPiece: (type: PieceType) => void;
}

function PieceButtons(Props: PieceButtonsProps) {
  return (
    <React.Fragment>
      <h3>Pieces</h3>
      <BarItem largeButtons={true} mouseUpHandler={() => Props.selectPiece(PieceType.adventurer)}>
        <span className='inline flex-center all-spaced'><PersonSimpleWalk/> Adventurer</span>
      </BarItem>
      <BarItem largeButtons={true} mouseUpHandler={() => Props.selectPiece(PieceType.commoner)}>
        <span className='inline flex-center all-spaced'><Storefront/> Commoner</span>
      </BarItem>
      <BarItem largeButtons={true} mouseUpHandler={() => Props.selectPiece(PieceType.engineer)}>
        <span className='inline flex-center all-spaced'><Wall/> Engineer</span>
      </BarItem>
      <BarItem largeButtons={true} mouseUpHandler={() => Props.selectPiece(PieceType.knight)}>
        <span className='inline flex-center all-spaced'><Sword/> Knight</span>
      </BarItem>
      <BarItem largeButtons={true} mouseUpHandler={() => Props.selectPiece(PieceType.messenger)}>
        <span className='inline flex-center all-spaced'><EnvelopeSimple/> Messenger</span>
      </BarItem>
      <BarItem largeButtons={true} mouseUpHandler={() => Props.selectPiece(PieceType.smuggler)}>
        <span className='inline flex-center all-spaced'><Jeep/> Smuggler</span>
      </BarItem>
    </React.Fragment>
  )
}

export default PieceButtons;