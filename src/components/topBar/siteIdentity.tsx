import React from 'react';
import BarItem from '../items/barItem';
import Logo from '../../images/rc.svg';
import '../../App.css';

const SiteIdentity = () => (
  <BarItem to='/' icon={Logo} iconClass='top-bar-logo'>
    <span className='wide-screen'>ReadyCompete</span>
  </BarItem>
);

export default SiteIdentity;
