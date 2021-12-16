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

export function PieceStrength(type: PieceType) {
  switch(type) {
    case PieceType.adventurer: return 3;
    case PieceType.commoner: return 1;
    case PieceType.engineer: return 1;
    case PieceType.knight: return 5;
    case PieceType.messenger: return 1;
    case PieceType.smuggler: return 1;
  }
}

export function PieceSpeed(type: PieceType) {
  switch(type) {
    case PieceType.adventurer: return 3;
    case PieceType.commoner: return 1;
    case PieceType.engineer: return 1;
    case PieceType.knight: return 3;
    case PieceType.messenger: return 4;
    case PieceType.smuggler: return 2;
  }
}

export function PieceIcon(type: PieceType){
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
  if(points - PieceCost(type) < 0) {
    return;
  }

  const localPieces = _.cloneDeep(pieces);
  let found = localPieces.find( piece => piece.type === type );
  if(found) {
    found.count++;
  } else {
    let newPiece: Piece = {type: type, count: 1};
    localPieces.push(newPiece);
  }

  SortByTypeName(localPieces);

  updateArmy(localPieces, points - PieceCost(type));
}

export function SortByTypeName(pieces: Piece[]) {
  pieces.sort((a, b) => a.type.localeCompare(b.type));
}

export function SortByCount(pieces: Piece[]) {
  pieces.sort((a, b) => b.count - a.count);
}

export function SortByStrength(pieces: Piece[]) {
  pieces.sort((a, b) => PieceStrength(b.type) - PieceStrength(a.type));
}

export function SortBySpeed(pieces: Piece[]) {
  pieces.sort((a, b) => PieceSpeed(b.type) - PieceSpeed(a.type));
}