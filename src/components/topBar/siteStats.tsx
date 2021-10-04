
import React, { useState } from 'react';
import BarItem from '../barItem';
import { Users, Sword } from 'phosphor-react';
import i18n from '../../i18nextConf';
import { useTranslation } from 'react-i18next';
import '../../App.css';

function SiteStats() {
  const { t } = useTranslation('translation', { i18n });

  return (
    <span className='center-group inline'>
      <BarItem>
        <span className='wide-screen'>
          <span className='inline flex-center bar-spaced'><Users/>32 {t('Online')}</span>
        </span>
        <span className='narrow-screen'>
          <span className='inline flex-center'><Users/>32</span>
        </span>
      </BarItem>
      <BarItem>
        <span className='wide-screen'>
          <span className='inline flex-center bar-spaced'><Sword/>8 {t('ActiveGames')}</span>
        </span>
        <span className='narrow-screen'>
          <span className='inline flex-center'><Sword/>8</span>
        </span>
      </BarItem>
    </span>
  );
};

export default SiteStats;