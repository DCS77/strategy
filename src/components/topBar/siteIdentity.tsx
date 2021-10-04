
import React, { useState } from 'react';
import BarItem from '../barItem';
import Logo from '../../images/logo.svg';
import '../../App.css';

function SiteIdentity() {
  return (
    <BarItem icon={Logo}>
      <span className='wide-screen'>Strategy Game Site</span>
    </BarItem>
  );
};

export default SiteIdentity;