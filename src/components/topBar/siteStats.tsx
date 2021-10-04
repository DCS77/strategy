
import React, { useState } from 'react';
import BarItem from '../barItem';
import { Users, Sword } from 'phosphor-react';
import '../../App.css';

function SiteStats() {
  return (
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
  );
};

export default SiteStats;