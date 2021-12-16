import React from 'react';
import SiteIdentity from './siteIdentity';
import SiteStats from './siteStats';
import Settings from './settings';
import './topBar.css';
import '../../App.css';

interface TopBarProps {
  theme: string;
  onClickThemeSwitch: (checked: boolean) => void;
  onAccountMouseUp: () => void;
  onAccountMouseDown: () => void;
  onLanguageMouseUp: () => void;
  onLanguageMouseDown: () => void;
}

function TopBar(Props: TopBarProps) {
  return (
    <div className={'header passero theme-' + Props.theme}>
      <span className='left-group'><SiteIdentity/></span>
      <span className='centre-group'><SiteStats/></span>
      <span className='right-group'>
        <Settings
          theme={Props.theme}
          onClickThemeSwitch={Props.onClickThemeSwitch}
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