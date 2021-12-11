import React from 'react';
import BarItem from '../items/barItem';
import i18n from '../../i18nextConf';
import { Books, Cpu, Horse, Television, Trophy, Users } from 'phosphor-react';
import { useTranslation } from 'react-i18next';

function NavigationList() {
  const { t } = useTranslation('translation', { i18n });

  return (
    <React.Fragment>
    <BarItem to='/tv' newTab={true}>
      <span className='wide-screen'>
        <span className='inline flex-center all-spaced'><Television/>{t('Arena TV')}</span>
      </span>
      <span className='narrow-screen'>
        <span className='inline flex-center'><Television/></span>
      </span>
    </BarItem>
      <BarItem to='/play' newTab={true}>
        <span className='wide-screen'>
          <span className='inline flex-center all-spaced'><Users/>{t('Multiplayer')}</span>
        </span>
        <span className='narrow-screen'>
          <span className='inline flex-center'><Users/></span>
        </span>
      </BarItem>
      <BarItem to='/ai' newTab={true}>
        <span className='wide-screen'>
          <span className='inline flex-center all-spaced'><Cpu/>{t('Play AI')}</span>
        </span>
        <span className='narrow-screen'>
          <span className='inline flex-center'><Cpu/></span>
        </span>
      </BarItem>
      <BarItem to='/learn' newTab={true}>
        <span className='wide-screen'>
          <span className='inline flex-center all-spaced'><Books/>{t('Learn to play')}</span>
        </span>
        <span className='narrow-screen'>
          <span className='inline flex-center'><Books/></span>
        </span>
      </BarItem>
      <BarItem to='/army' newTab={true}>
        <span className='wide-screen'>
          <span className='inline flex-center all-spaced'><Horse/>{t('Your Army')}</span>
        </span>
        <span className='narrow-screen'>
          <span className='inline flex-center'><Horse/></span>
        </span>
      </BarItem>
      <BarItem to='/leaderboards' newTab={true}>
        <span className='wide-screen'>
          <span className='inline flex-center all-spaced'><Trophy/>{t('Leaderboards')}</span>
        </span>
        <span className='narrow-screen'>
          <span className='inline flex-center'><Trophy/></span>
        </span>
      </BarItem>
    </React.Fragment>
  )
}

export default NavigationList;