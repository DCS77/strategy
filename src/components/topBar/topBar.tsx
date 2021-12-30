import React from 'react';
import { useStateValue } from '../../state/state';
import SiteIdentity from './siteIdentity';
import SiteStats from './siteStats';
import Settings from './settings';
import './topBar.css';
import '../../App.css';

interface TopBarProps {
  onAccountMouseUp: () => void;
  onAccountMouseDown: () => void;
  onLanguageMouseUp: () => void;
  onLanguageMouseDown: () => void;
}

const TopBar = (Props: TopBarProps) => {
  const { state } = useStateValue();
  const {
    onLanguageMouseUp, onLanguageMouseDown, onAccountMouseUp, onAccountMouseDown,
  } = Props;

  return (
    <div className={`header theme-${state.pageLayout.theme}`}>
      <span className='left-group'><SiteIdentity /></span>
      <span className='centre-group'><SiteStats /></span>
      <span className='right-group'>
        <Settings
          onAccountMouseUp={onAccountMouseUp}
          onAccountMouseDown={onAccountMouseDown}
          onLanguageMouseUp={onLanguageMouseUp}
          onLanguageMouseDown={onLanguageMouseDown}
        />
      </span>
    </div>
  );
};

export default TopBar;
