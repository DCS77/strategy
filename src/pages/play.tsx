import React, { useEffect } from 'react';
import './page.css';
import '../App.css';
import Board from '../components/board/board';
import NavigationList from '../components/navigation/navigationList';
import { TabType } from '../types';
import i18n from '../i18nextConf';
import { useTranslation } from 'react-i18next';

interface PlayProps {
  ID?: string;
  onCreateGame: (ID: string, title: string) => void;
  createTab: (ID: string, path: string, title: string, type: TabType) => void;
  changePath: (path: string) => void;
}

function ShowGame(Props: PlayProps) {
  const { t } = useTranslation('translation', { i18n });

  return (
    <div className='full-size gameRow'>
      <div className='leftColumn'>
        <div className='navSection'>
          <NavigationList/>
        </div>
        <div className='moveHistory'>
          {t('Move History')}
        </div>
      </div>
      <div className='boardColumn'>
        <Board/>
      </div>
      <div className='rightColumn'>
        <div className='opponentSection'>
          {t('Opponent Details')}
        </div>
        <div className='chatSection'>
          {t('Chat')}
        </div>
      </div>
    </div>
  )
}

// Added temporarily to test adding of game tabs
function MakeID(length: number) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function SearchForGame(Props: PlayProps){
  let id = MakeID(2);
  Props.onCreateGame(id, `Game ${id}`);
  Props.changePath(`/play/${id}`);
}

function Play(Props: PlayProps) {
  const { t } = useTranslation('translation', { i18n });

  useEffect(() => {
    if(Props.ID) {
      Props.createTab(Props.ID, `play/${Props.ID}`, `Play ${Props.ID}`, TabType.Game);
    } else {
      Props.createTab('play', 'play', t('Multiplayer'), TabType.Multiplayer);
    }
  });

  if(Props.ID){
    return ShowGame(Props);
  }

  return (
    <div className='full-size gameRow'>
      <div className='leftColumn'>
        <NavigationList/>
      </div>
      <div className='boardColumn'>
        Create a new game
        <div onClick={(event) => SearchForGame(Props)}>
          Add game tab
        </div>
        Games being searched for
      </div>
      <div className='rightColumn'>
        {t('Chat')}
      </div>
    </div>
  )
};

export default Play;