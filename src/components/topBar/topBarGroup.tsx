import React, { useState } from 'react';
import AccountDropdownMenu from './accountDropdown';
import LanguageDropdownMenu from './languageDropdown';
import TopBar from './topBar';
import './topBar.css';
import '../../App.css';

interface TopBarProps {
  theme: string;
  onClickThemeSwitch: (checked: boolean) => void;
  onAccountClick: (visible: boolean) => void;
  onLanguageClick: (visible: boolean) => void;
}

function TopBarGroup(Props: TopBarProps) {
  const [accountDropdownVisible, setAccountDropdownVisible] = useState(false);
  const [accountDropdownClass, setAccountDropdownClass] = useState('passero');
  const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);
  const [languageDropdownClass, setLanguageDropdownClass] = useState('passero');

  function ToggleAccountDropdown() {
    setAccountDropdownVisible(!accountDropdownVisible);
    setAccountDropdownClass(accountDropdownVisible ? 'noselect passero' : 'noselect passero hidden');
    Props.onAccountClick(accountDropdownVisible);
  }

  function ToggleLanguageDropdown() {
    setLanguageDropdownVisible(!languageDropdownVisible);
    setLanguageDropdownClass(languageDropdownVisible ? 'noselect passero' : 'noselect passero hidden');
    Props.onLanguageClick(languageDropdownVisible);
  }

  return (
    <React.Fragment>
      <TopBar
        theme={Props.theme}
        onClickThemeSwitch={Props.onClickThemeSwitch}
        onAccountClick={ToggleAccountDropdown}
        onLanguageClick={ToggleLanguageDropdown}
      />
      <div className={accountDropdownClass}>
        <AccountDropdownMenu/>
      </div>
      <div className={languageDropdownClass}>
        <LanguageDropdownMenu/>
      </div>
    </React.Fragment>
  );
};

export default TopBarGroup;