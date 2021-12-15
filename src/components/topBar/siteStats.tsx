
import React from 'react';
import BarItem from '../items/barItem';
import { Sword, Television, Users, UsersFour } from 'phosphor-react';
import i18n from '../../i18nextConf';
import { useTranslation } from 'react-i18next';
import '../../App.css';

function SiteStats() {
  const { t } = useTranslation('translation', { i18n });

  return (
    <span className='centre-group inline'>
      <BarItem to='/tv'>
        <span className='inline flex-center all-spaced'><Television/>TV</span>
      </BarItem>
      <BarItem to='/online'>
        <span className='wide-screen'>
          <span className='inline flex-center all-spaced'><UsersFour/>32 {t('Online')}</span>
        </span>
        <span className='narrow-screen'>
          <span className='inline flex-center'><UsersFour/>32</span>
        </span>
      </BarItem>
      <BarItem to='/live'>
        <span className='wide-screen'>
          <span className='inline flex-center all-spaced'><Sword/>8 {t('Active Games')}</span>
        </span>
        <span className='narrow-screen'>
          <span className='inline flex-center'><Sword/>8</span>
        </span>
      </BarItem>
      <BarItem to='/play'>
        <span className='inline flex-center all-spaced'><Users/>{t('Play')}</span>
      </BarItem>
    </span>
  );
};

export default SiteStats;