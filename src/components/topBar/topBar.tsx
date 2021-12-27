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

function TopBar(Props: TopBarProps) {
  const { state } = useStateValue();

  return (
    <div className={'header passero theme-' + state.pageLayout.theme}>
      <span className='left-group'><SiteIdentity/></span>
      <span className='centre-group'><SiteStats/></span>
      <span className='right-group'>
        <Settings
          onAccountMouseUp={Props.onAccountMouseUp}
          onAccountMouseDown={Props.onAccountMouseDown}
          onLanguageMouseUp={Props.onLanguageMouseUp}
          onLanguageMouseDown={Props.onLanguageMouseDown}
        />
      </span>
    </div>
  );
};

export default TopBar;