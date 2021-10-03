import React, { useState } from 'react';
import BarItem from './barItem';
import { GithubLogo, UserRectangle, CurrencyCircleDollar, Scales, Cookie, Copyright } from 'phosphor-react';
import './bottomBar.css';
import '../App.css';

interface BottomBarProps {
}

function BottomBar(Props: BottomBarProps) {
  return (
    <div className='footer passero inline'>
      <div className='left-group inline'>
        <BarItem link='https://github.com/DCS77/strategy'>
          <span className='wide-screen'>
            <span className='inline flex-center bar-spaced'><GithubLogo/>Github</span>
          </span>
          <span className='narrow-screen'>
            <span className='inline flex-center'><GithubLogo/>Github</span>
          </span>
        </BarItem>
        <BarItem link='#'>
          <span className='wide-screen'>
            <span className='inline flex-center bar-spaced'><UserRectangle/>Contact</span>
          </span>
          <span className='narrow-screen'>
            <span className='inline flex-center'><UserRectangle/>Contact</span>
          </span>
        </BarItem>
        <BarItem link='#'>
          <span className='wide-screen'>
            <span className='inline flex-center bar-spaced'><CurrencyCircleDollar/>Donate</span>
          </span>
          <span className='narrow-screen'>
            <span className='inline flex-center'><CurrencyCircleDollar/>Donate</span>
          </span>
        </BarItem>
      </div>
      <div className='right-group inline'>
        <BarItem link='#'>
          <span className='wide-screen'>
            <span className='inline flex-center bar-spaced'><Scales/>Terms of Use</span>
          </span>
          <span className='narrow-screen'>
            <span className='inline flex-center'><Scales/>Terms</span>
          </span>
        </BarItem>
        <BarItem link='#'>
          <span className='wide-screen'>
            <span className='inline flex-center bar-spaced'><Cookie/>Privacy</span>
          </span>
          <span className='narrow-screen'>
            <span className='inline flex-center'><Cookie/>Privacy</span>
          </span>
        </BarItem>
        <BarItem>
          <span className='wide-screen'>
            <span className='inline flex-center bar-spaced'><Copyright/>Daniel Smit 2021</span>
          </span>
        </BarItem>
      </div>   
    </div>
  );
};

export default BottomBar;