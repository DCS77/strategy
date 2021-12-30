import React from 'react';
import {
  Sword, Television, Users, UsersFour,
} from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import BarItem from '../items/barItem';
import i18n from '../../i18nextConf';
import '../../App.css';

const SiteStats = () => {
  const { t } = useTranslation('translation', { i18n });

  return (
    <span className='centre-group inline'>
      <BarItem to='/tv'>
        <span className='inline flex-centre all-spaced'>
          <Television />
          TV
        </span>
      </BarItem>
      <BarItem to='/online'>
        <span className='wide-screen'>
          <span className='inline flex-centre all-spaced'>
            <UsersFour />
            32
            {' '}
            {t('Online')}
          </span>
        </span>
        <span className='narrow-screen'>
          <span className='inline flex-centre'>
            <UsersFour />
            32
          </span>
        </span>
      </BarItem>
      <BarItem to='/live'>
        <span className='wide-screen'>
          <span className='inline flex-centre all-spaced'>
            <Sword />
            8
            {' '}
            {t('Active Games')}
          </span>
        </span>
        <span className='narrow-screen'>
          <span className='inline flex-centre'>
            <Sword />
            8
          </span>
        </span>
      </BarItem>
      <BarItem to='/play'>
        <span className='inline flex-centre all-spaced'>
          <Users />
          {t('Play')}
        </span>
      </BarItem>
    </span>
  );
};

export default SiteStats;
