import React, { useState } from 'react';
import BarItem from './barItem';
import Logo from '../images/logo.svg';
import Switch from './toggleSwitch';
import { Users, Sword, Translate, PaintRoller, CaretDown, User } from 'phosphor-react';
import './topBar.css';
import '../App.css';

interface TopBarProps {
  theme: string;
  onClickThemeSwitch: (checked: boolean) => void;
}

function TopBar(Props: TopBarProps) {
  return (
    <span className='header passero'>
      <span className='left-group'>
        <BarItem icon={Logo}>
          <span className='wide-screen'>Strategy Game Site</span>
        </BarItem>
      </span>
      <span className='center-group'>
        <span className='center-group inline'>
          <BarItem>
            <span className='wide-screen'>
              <span className='inline flex-center bar-spaced'><Users/>32 Online</span>
            </span>
            <span className='narrow-screen'>
              <span className='inline flex-center'><Users/>32</span>
            </span>
          </BarItem>
          <BarItem>
            <span className='wide-screen'>
              <span className='inline flex-center bar-spaced'><Sword/>8 Games in Play</span>
            </span>
            <span className='narrow-screen'>
              <span className='inline flex-center'><Sword/>8</span>
            </span>
          </BarItem>
        </span>
      </span>
      <span className='right-group'>
        <BarItem>
          <span className='wide-screen'>
            <span className='inline flex-center bar-spaced'><Translate/></span>
          </span>
          <span className='narrow-screen'>
            <span className='inline flex-center'><Translate/></span>
          </span>
        </BarItem>
        <BarItem>
          <span className='wide-screen inline flex-center bar-spaced'>
            <PaintRoller/>
            <Switch
              alt='Change theme'
              checked={Props.theme === 'dark'}
              clickHandler={Props.onClickThemeSwitch}
            />
          </span>
        </BarItem>
        <BarItem>
          <span className='wide-screen bar-spaced'>
            <span className='inline flex-center bar-spaced'>Account<CaretDown/></span>
          </span>
          <span className='narrow-screen'>
            <span className='inline flex-center'><User/><CaretDown/></span>
          </span>
        </BarItem>
      </span>
    </span>
  );
};

export default TopBar;