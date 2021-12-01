import React from 'react';
import './game.css';
import '../../App.css';

interface GameProps {
  ID?: string;
}

function Game(Props: GameProps) {
  return (
    <div className='full-size gameRow'>
      <div className='leftColumn'>
        <div className='moveSection'>
          Game Move Details
        </div>
        <div className='pieceSection'>
          Pieces
        </div>
      </div>
      <div className='boardColumn'>Board for game {Props.ID}</div>
      <div className='rightColumn'>
        <div className='opponentSection'>
          Opponent Details
        </div>
        <div className='chatSection'>
          Chat
        </div>
      </div>
    </div>
  )
};

export default Game;