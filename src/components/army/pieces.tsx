import React from 'react';
import {
  EnvelopeSimple, Jeep, PersonSimpleWalk, Storefront, Sword, Wall,
} from 'phosphor-react';
import _ from 'lodash';
import { PieceType } from '../../API';

export interface Piece {
  type: PieceType;
  count: number;
}

export function PieceCost(type: PieceType) {
  switch (type) {
    case PieceType.adventurer: return 6;
    case PieceType.commoner: return 1;
    case PieceType.engineer: return 4;
    case PieceType.knight: return 8;
    case PieceType.messenger: return 2;
    case PieceType.smuggler: return 8;
    default: return 99;
  }
}

export function PieceStrength(type: PieceType) {
  switch (type) {
    case PieceType.adventurer: return 3;
    case PieceType.commoner: return 1;
    case PieceType.engineer: return 1;
    case PieceType.knight: return 5;
    case PieceType.messenger: return 1;
    case PieceType.smuggler: return 1;
    default: return 99;
  }
}

export function PieceSpeed(type: PieceType) {
  switch (type) {
    case PieceType.adventurer: return 3;
    case PieceType.commoner: return 1;
    case PieceType.engineer: return 1;
    case PieceType.knight: return 3;
    case PieceType.messenger: return 4;
    case PieceType.smuggler: return 2;
    default: return 99;
  }
}

export const PieceIcon = (type: PieceType) => {
  switch (type) {
    case PieceType.adventurer: return <PersonSimpleWalk />;
    case PieceType.commoner: return <Storefront />;
    case PieceType.engineer: return <Wall />;
    case PieceType.knight: return <Sword />;
    case PieceType.messenger: return <EnvelopeSimple />;
    case PieceType.smuggler: return <Jeep />;
    default: return null;
  }
};

export function PieceCharacter(type: PieceType) {
  switch (type) {
    case PieceType.adventurer: return 'A';
    case PieceType.commoner: return 'C';
    case PieceType.engineer: return 'E';
    case PieceType.knight: return 'K';
    case PieceType.messenger: return 'M';
    case PieceType.smuggler: return 'S';
    default: return '?';
  }
}

export function CountPoints(pieces: Piece[]) {
  if (pieces.length > 0) {
    return pieces.map((piece) => piece.count * PieceCost(piece.type)).reduce((prev, next) => prev + next);
  }
  return 0;
}

export function SortByTypeName(pieces: Piece[]) {
  pieces.sort((a, b) => a.type.localeCompare(b.type));
}

export function AddPiece(
  points: number,
  pieces: Piece[],
  type: PieceType,
  updateArmy: (newPieces: Piece[], newPoints: number) => void,
) {
  if (points - PieceCost(type) < 0) {
    return;
  }

  const localPieces = _.cloneDeep(pieces);
  const found = localPieces.find((piece) => piece.type === type);
  if (found) {
    found.count++;
  } else {
    const newPiece: Piece = { type, count: 1 };
    localPieces.push(newPiece);
  }

  SortByTypeName(localPieces);

  updateArmy(localPieces, points - PieceCost(type));
}

export function RemovePiece(
  points: number,
  pieces: Piece[],
  type: PieceType,
  updateArmy: (newPieces: Piece[], newPoints: number) => void,
) {
  let localPieces = _.cloneDeep(pieces);
  const found = localPieces.find((piece) => piece.type === type);
  if (found && found.count > 0) {
    found.count--;
  } else {
    return;
  }

  if (found.count === 0) {
    localPieces = localPieces.filter((piece) => piece.count > 0);
  }

  updateArmy(localPieces, points + PieceCost(type));
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
