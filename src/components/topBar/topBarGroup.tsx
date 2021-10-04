import React, { useState, useRef } from 'react';
import AccountDropdownMenu from './accountDropdown';
import LanguageDropdownMenu from './languageDropdown';
import TopBar from './topBar';
import './topBar.css';
import '../../App.css';

interface TopBarProps {
  theme: string;
  onClickThemeSwitch: (checked: boolean) => void;
}

function TopBarGroup(Props: TopBarProps) {
  const [accountDropdownVisible, setAccountDropdownVisible] = useState(false);
  const [accountDropdownClass, setAccountDropdownClass] = useState('noselect passero hidden');
  const [accountMouseDown, setAccountMouseDown] = useState(false);
  const accountDropdown = useRef<HTMLDivElement>(null);
  
  const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);
  const [languageDropdownClass, setLanguageDropdownClass] = useState('noselect passero hidden');
  const [languageMouseDown, setLanguageMouseDown] = useState(false);
  const languageDropdown = useRef<HTMLDivElement>(null);

  function ToggleAccountDropdown(visible: boolean) {
    setAccountDropdownVisible(visible);
    setAccountDropdownClass(visible ? 'noselect passero' : 'noselect passero hidden');
    if (visible && accountDropdown.current !== null) {
      accountDropdown.current.focus();
    }
  }

  function AccountMouseUp(){
    ToggleAccountDropdown(!accountDropdownVisible);
    setAccountMouseDown(false);
  }

  function AccountMouseDown(){
    setAccountMouseDown(true);
  }

  function AccountBlur(){
    if(!accountMouseDown){
      ToggleAccountDropdown(false);
    }
  }

  function CloseAccountMenu(){
    ToggleAccountDropdown(false);
  }

  function ToggleLanguageDropdown(visible: boolean) {
    setLanguageDropdownVisible(visible);
    setLanguageDropdownClass(visible ? 'noselect passero' : 'noselect passero hidden');
    if (visible && languageDropdown.current !== null) {
      languageDropdown.current.focus();
    }
  }

  function LanguageMouseUp(){
    ToggleLanguageDropdown(!languageDropdownVisible);
    setLanguageMouseDown(false);
  }

  function LanguageMouseDown(){
    setLanguageMouseDown(true);
  }

  function LanguageBlur(){
    if(!languageMouseDown){
      ToggleLanguageDropdown(false);
    }
  }

  function CloseLanguageMenu(){
    ToggleLanguageDropdown(false);
  }

  return (
    <React.Fragment>
      <TopBar
        theme={Props.theme}
        onClickThemeSwitch={Props.onClickThemeSwitch}
        onAccountMouseUp={AccountMouseUp}
        onAccountMouseDown={AccountMouseDown}
        onLanguageMouseUp={LanguageMouseUp}
        onLanguageMouseDown={LanguageMouseDown}
      />
      <div ref={accountDropdown} className={accountDropdownClass} tabIndex={0} onBlur={AccountBlur}>
        <AccountDropdownMenu onClickAnyItem={CloseAccountMenu}/>
      </div>
      <div ref={languageDropdown} className={languageDropdownClass} tabIndex={1} onBlur={LanguageBlur}>
        <LanguageDropdownMenu onClickAnyItem={CloseLanguageMenu}/>
      </div>
    </React.Fragment>
  );
};

export default TopBarGroup;