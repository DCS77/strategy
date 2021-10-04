
import React, { useState } from 'react';
import Switch from '../toggleSwitch';
import BarItem from '../barItem';
import { Translate, PaintRoller, CaretDown, User } from 'phosphor-react';
import '../../App.css';

interface SettingsProps {
  theme: string;
  onClickThemeSwitch: (checked: boolean) => void;
  onAccountClick: () => void;
  onLanguageClick: () => void;
}

function SettingsProps(Props: SettingsProps) {
  return (
    <React.Fragment>
      <BarItem clickHandler={Props.onLanguageClick}>
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
      <BarItem clickHandler={Props.onAccountClick}>
        <span className='wide-screen bar-spaced'>
          <span className='inline flex-center bar-spaced'>Account<CaretDown/></span>
        </span>
        <span className='narrow-screen'>
          <span className='inline flex-center'><User/><CaretDown/></span>
        </span>
      </BarItem>
    </React.Fragment>
  );
};

export default SettingsProps;