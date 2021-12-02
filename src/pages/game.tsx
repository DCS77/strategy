import React from 'react';
import './game.css';
import '../App.css';
import NavigationList from '../components/navigation/navigationList';
import Board from '../components/board/board';

interface GameProps {
  ID?: string;
  onCreateGame: () => void;
}

function ShowGame(Props: GameProps) {
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
      <div className='boardColumn'>
        <Board/>
      </div>
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
}

function Game(Props: GameProps) {
  if(Props.ID){
    return ShowGame(Props)
  }

  return (
    <div className='full-size gameRow'>
      <div className='leftColumn'>
        <NavigationList/>
      </div>
      <div className='boardColumn'>
        Create a new game
        <div onClick={Props.onCreateGame}>
          Add game tab
        </div>
      </div>
      <div className='rightColumn'>
        Chat
      </div>
    </div>
  )
};

export default Game;