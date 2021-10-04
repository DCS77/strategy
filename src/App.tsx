import React, { useState } from 'react';
import BottomBar from './components/bottomBar';
import TopBarGroup from './components/topBar/topBarGroup';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  function onClickThemeSwitch(checked: boolean) {
    setTheme(checked ? 'dark' : 'light');
  }

  function onAccountClick(visible: boolean) {
    console.log('account clicked', visible);
  }

  function onLanguageClick(visible: boolean) {
    console.log('language clicked', visible);
  }

  return (
    <div id="theme" className={'transition theme-' + theme}>
      <TopBarGroup
        theme={theme}
        onClickThemeSwitch={onClickThemeSwitch}
        onAccountClick={onAccountClick}
        onLanguageClick={onLanguageClick}/>
      <div className="page">
          Testing
          <br></br>
          Testing
          <br></br>
          Testing
          <br></br>
          Testing
          <br></br>
          Testing
      </div>
      <BottomBar/>
    </div>
  );
}

export default App;
