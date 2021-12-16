import { PieceType } from '../../API';
import { EnvelopeSimple, Jeep, PersonSimpleWalk, Storefront, Sword, Wall } from 'phosphor-react';
import _ from 'lodash';

export interface Piece {
  type: PieceType;
  count: number;
}

export function PieceCost(type: PieceType) {
  switch(type) {
    case PieceType.adventurer: return 6;
    case PieceType.commoner: return 1;
    case PieceType.engineer: return 4;
    case PieceType.knight: return 8;
    case PieceType.messenger: return 2;
    case PieceType.smuggler: return 8;
  }
}

export function GetPieceIcon(type: PieceType){
  switch(type) {
    case PieceType.adventurer: return <PersonSimpleWalk/>;
    case PieceType.commoner: return <Storefront/>;
    case PieceType.engineer: return <Wall/>;
    case PieceType.knight: return <Sword/>;
    case PieceType.messenger: return <EnvelopeSimple/>;
    case PieceType.smuggler: return <Jeep/>;
  }
}

export function PieceCharacter(type: PieceType) {
  switch(type) {
    case PieceType.adventurer: return 'A';
    case PieceType.commoner: return 'C';
    case PieceType.engineer: return 'E';
    case PieceType.knight: return 'K';
    case PieceType.messenger: return 'M';
    case PieceType.smuggler: return 'S';
  }
}

export function AddPiece(
  points: number,
  pieces: Piece[],
  type: PieceType,
  updateArmy: (pieces: Piece[], points: number) => void
) {
  const localPieces = _.cloneDeep(pieces);
  let found = localPieces.find( piece => piece.type === type );
  if(found) {
    found.count++;
  } else {
    let newPiece: Piece = {type: type, count: 1};
    localPieces.push(newPiece);
  }

  updateArmy(localPieces, points - PieceCost(type));
}