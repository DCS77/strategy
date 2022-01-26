import React, { useEffect, useState, useRef } from 'react';
import { Auth } from 'aws-amplify';
import { useStateValue } from '../../state/state';
import AccountDropdownMenu from './accountDropdown';
import LanguageDropdownMenu from './languageDropdown';
import TopBar from './topBar';
import './topBar.css';
import '../../App.css';

const TopBarGroup = () => {
  const { state, dispatch } = useStateValue();

  const [accountDropdownVisible, setAccountDropdownVisible] = useState(false);
  const [accountDropdownClass, setAccountDropdownClass] = useState('hidden');
  const [accountMouseDown, setAccountMouseDown] = useState(false);
  const accountDropdown = useRef<HTMLDivElement>(null);

  const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);
  const [languageDropdownClass, setLanguageDropdownClass] = useState('hidden');
  const [languageMouseDown, setLanguageMouseDown] = useState(false);
  const languageDropdown = useRef<HTMLDivElement>(null);

  const [loggedIn, setLoggedIn] = useState(state.userData && state.userData.username);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((data) => {
        setLoggedIn(true);
        dispatch({
          type: 'setUserData',
          value: data,
        });
      })
      .catch((err) => setLoggedIn(false));
  }, [Auth]);

  function ToggleAccountDropdown(visible: boolean) {
    setAccountDropdownVisible(visible);
    setAccountDropdownClass(visible ? '' : 'hidden');
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
    setLanguageDropdownClass(visible ? '' : 'hidden');
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
        <AccountDropdownMenu loggedIn={loggedIn} onClickAnyItem={CloseAccountMenu} onBlur={AccountBlur} />
      </div>
      <div ref={languageDropdown} className={languageDropdownClass}>
        <LanguageDropdownMenu onClickAnyItem={CloseLanguageMenu} onBlur={LanguageBlur} />
      </div>
    </>
  );
};

export default TopBarGroup;
