import React, { useState, useRef } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BottomBar from './components/bottomBar';
import TopBarGroup from './components/topBar/topBarGroup';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const app = useRef<HTMLDivElement>(null);

  function onClickThemeSwitch(checked: boolean) {
    setTheme(checked ? 'dark' : 'light');
  }

  return (
    <BrowserRouter>
      <div ref={app} id="theme" className={'transition theme-' + theme}>
        <TopBarGroup
          theme={theme}
          onClickThemeSwitch={onClickThemeSwitch}/>
        <div className="page">
          <Switch>
            <Route path="/contact">
              Contact
            </Route>
            <Route path="/donate">
              Donate
            </Route>
            <Route path="/terms">
              Terms
            </Route>
            <Route path="/privacy">
              Privacy
            </Route>
            <Route path="/">
              Home
            </Route>
          </Switch>
        </div>
        <BottomBar/>
      </div>
    </BrowserRouter>
  );
}

export default App;
