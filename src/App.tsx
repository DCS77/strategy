import React, { useState } from 'react';
import BottomBar from './components/bottomBar';
import TopBar from './components/topBar';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  function onClickThemeSwitch(checked: boolean) {
    setTheme(checked ? 'dark' : 'light');
  }

  return (
    <div id="theme" className={"transition theme-" + theme}>
      <TopBar theme={theme} onClickThemeSwitch={onClickThemeSwitch}/>
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
