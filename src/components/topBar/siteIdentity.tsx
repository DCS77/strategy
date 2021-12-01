import React from 'react';
import BarItem from '../barItem';
import Logo from '../../images/logo.svg';
import '../../App.css';

function SiteIdentity() {
  return (
    <BarItem to='/' icon={Logo}>
      <span className='wide-screen'>Strategy Game Site</span>
    </BarItem>
  );
};

export default SiteIdentity;