import React from 'react';
import BarItem from '../items/barItem';
import Logo from '../../images/logo.svg';
import '../../App.css';

const SiteIdentity = () => (
  <BarItem to='/' icon={Logo}>
    <span className='wide-screen'>Strategy Game Site</span>
  </BarItem>
);

export default SiteIdentity;
