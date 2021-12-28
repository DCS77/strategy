import React, { useState, useRef } from 'react';
import AccountDropdownMenu from './accountDropdown';
import LanguageDropdownMenu from './languageDropdown';
import TopBar from './topBar';
import './topBar.css';
import '../../App.css';

const TopBarGroup = () => {
  const [accountDropdownVisible, setAccountDropdownVisible] = useState(false);
  const [accountDropdownClass, setAccountDropdownClass] = useState('passero hidden');
  const [accountMouseDown, setAccountMouseDown] = useState(false);
  const accountDropdown = useRef<HTMLDivElement>(null);

  const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);
  const [languageDropdownClass, setLanguageDropdownClass] = useState('passero hidden');
  const [languageMouseDown, setLanguageMouseDown] = useState(false);
  const languageDropdown = useRef<HTMLDivElement>(null);

  function ToggleAccountDropdown(visible: boolean) {
    setAccountDropdownVisible(visible);
    setAccountDropdownClass(visible ? 'passero' : 'passero hidden');
    if (visible && accountDropdown.current !== null) {
      accountDropdown.current.focus();
    }
  }

  function AccountMouseUp() {
    ToggleAccountDropdown(!accountDropdownVisible);
    setAccountMouseDown(false);
  }

  function AccountMouseDown() {
    setAccountMouseDown(true);
  }

  function AccountBlur() {
    if (!accountMouseDown) {
      ToggleAccountDropdown(false);
    }
  }

  function CloseAccountMenu() {
    ToggleAccountDropdown(false);
  }

  function ToggleLanguageDropdown(visible: boolean) {
    setLanguageDropdownVisible(visible);
    setLanguageDropdownClass(visible ? 'passero' : 'passero hidden');
    if (visible && languageDropdown.current !== null) {
      languageDropdown.current.focus();
    }
  }

  function LanguageMouseUp() {
    ToggleLanguageDropdown(!languageDropdownVisible);
    setLanguageMouseDown(false);
  }

  function LanguageMouseDown() {
    if (languageDropdown.current) {
      languageDropdown.current.focus();
    }
    setLanguageMouseDown(true);
  }

  function LanguageBlur() {
    if (!languageMouseDown) {
      ToggleLanguageDropdown(false);
    }
  }

  function CloseLanguageMenu() {
    ToggleLanguageDropdown(false);
  }

  return (
    <>
      <TopBar
        onAccountMouseUp={AccountMouseUp}
        onAccountMouseDown={AccountMouseDown}
        onLanguageMouseUp={LanguageMouseUp}
        onLanguageMouseDown={LanguageMouseDown}
      />
      <div ref={accountDropdown} className={accountDropdownClass}>
        <AccountDropdownMenu onClickAnyItem={CloseAccountMenu} onBlur={AccountBlur} />
      </div>
      <div ref={languageDropdown} className={languageDropdownClass}>
        <LanguageDropdownMenu onClickAnyItem={CloseLanguageMenu} onBlur={LanguageBlur} />
      </div>
    </>
  );
};

export default TopBarGroup;
