import React, { useState } from 'react';
import SiteIdentity from './siteIdentity';
import SiteStats from './siteStats';
import Settings from './settings';
import './topBar.css';
import '../../App.css';

interface TopBarProps {
  theme: string;
  onClickThemeSwitch: (checked: boolean) => void;
  onAccountClick: () => void;
  onLanguageClick: () => void;
}

function TopBar(Props: TopBarProps) {
  // const [accountDropdownVisible, setAccountDropdownVisible] = useState(false);

  // function ToggleAccountDropdown() {
  //   setAccountDropdownVisible(!accountDropdownVisible);
  //   Props.onAccountClick(accountDropdownVisible);
  // }

  // function ToggleLanguageDropdown() {
  //   setLanguageDropdownVisible(!languageDropdownVisible);
  //   Props.onLanguageClick(languageDropdownVisible);
  // }

  return (
    <div className={'header noselect passero theme-' + Props.theme}>
      <span className='left-group'><SiteIdentity/></span>
      <span className='center-group'><SiteStats/></span>
      <span className='right-group'>
        <Settings
          theme={Props.theme}
          onClickThemeSwitch={Props.onClickThemeSwitch}
          onAccountClick={Props.onAccountClick}
          onLanguageClick={Props.onLanguageClick}
        />
      </span>
    </div>
  );
};

export default TopBar;