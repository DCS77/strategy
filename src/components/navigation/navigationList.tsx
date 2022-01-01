import React from 'react';
import {
  Books, Cpu, Horse, Television, Trophy, Users,
} from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import BarItem from '../items/barItem';
import i18n from '../../i18nextConf';

const NavigationList = () => {
  const { t } = useTranslation('translation', { i18n });

  return (
    <div>
      <BarItem to='/tv' newTab narrowCentred>
        <span className='wide-screen'>
          <span className='inline flex-centre all-spaced'><Television />{t('Arena TV')}</span>
        </span>
        <span className='narrow-screen'>
          <span className='inline flex-centre'><Television /></span>
        </span>
      </BarItem>
      <BarItem to='/play' newTab narrowCentred>
        <span className='wide-screen'>
          <span className='inline flex-centre all-spaced'><Users />{t('Multiplayer')}</span>
        </span>
        <span className='narrow-screen'>
          <span className='inline flex-centre'><Users /></span>
        </span>
      </BarItem>
      <BarItem to='/ai' newTab narrowCentred>
        <span className='wide-screen'>
          <span className='inline flex-centre all-spaced'><Cpu />{t('Play AI')}</span>
        </span>
        <span className='narrow-screen'>
          <span className='inline flex-centre'><Cpu /></span>
        </span>
      </BarItem>
      <BarItem to='/learn' newTab narrowCentred>
        <span className='wide-screen'>
          <span className='inline flex-centre all-spaced'><Books />{t('Learn to play')}</span>
        </span>
        <span className='narrow-screen'>
          <span className='inline flex-centre'><Books /></span>
        </span>
      </BarItem>
      <BarItem to='/army' newTab narrowCentred>
        <span className='wide-screen'>
          <span className='inline flex-centre all-spaced'><Horse />{t('Your Armies')}</span>
        </span>
        <span className='narrow-screen'>
          <span className='inline flex-centre'><Horse /></span>
        </span>
      </BarItem>
      <BarItem to='/leaderboards' newTab narrowCentred>
        <span className='wide-screen'>
          <span className='inline flex-centre all-spaced'><Trophy />{t('Leaderboards')}</span>
        </span>
        <span className='narrow-screen'>
          <span className='inline flex-centre'><Trophy /></span>
        </span>
      </BarItem>
    </div>
  );
};

export default NavigationList;
