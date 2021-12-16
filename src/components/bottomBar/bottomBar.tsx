import React from 'react';
import BarItem from '../items/barItem';
import { GithubLogo, UserRectangle, CurrencyCircleDollar, Scales, Cookie, Copyright } from 'phosphor-react';
import i18n from '../../i18nextConf';
import { useTranslation } from 'react-i18next';
import './bottomBar.css';
import '../../App.css';

function BottomBar() {
  const { t } = useTranslation('translation', { i18n });

  return (
    <div className='footer passero inline'>
      <div className='left-group inline'>
        <BarItem link='https://github.com/DCS77/strategy' newTab={true}>
          <span className='wide-screen'>
            <span className='inline flex-center bar-spaced'><GithubLogo/>{t('Github')}</span>
          </span>
          <span className='narrow-screen'>
            <span className='inline flex-center'><GithubLogo/>{t('Github')}</span>
          </span>
        </BarItem>
        <BarItem to='/contact'>
          <span className='wide-screen'>
            <span className='inline flex-center bar-spaced'><UserRectangle/>{t('Contact')}</span>
          </span>
          <span className='narrow-screen'>
            <span className='inline flex-center'><UserRectangle/>{t('Contact')}</span>
          </span>
        </BarItem>
        <BarItem to='/donate'>
          <span className='wide-screen'>
            <span className='inline flex-center bar-spaced'><CurrencyCircleDollar/>{t('Donate')}</span>
          </span>
          <span className='narrow-screen'>
            <span className='inline flex-center'><CurrencyCircleDollar/>{t('Donate')}</span>
          </span>
        </BarItem>
      </div>
      <div className='right-group inline'>
        <BarItem to='/terms'>
          <span className='wide-screen'>
            <span className='inline flex-center bar-spaced'><Scales/>{t('Terms of Use')}</span>
          </span>
          <span className='narrow-screen'>
            <span className='inline flex-center'><Scales/>{t('Terms of Use')}</span>
          </span>
        </BarItem>
        <BarItem to='/privacy'>
          <span className='wide-screen'>
            <span className='inline flex-center bar-spaced'><Cookie/>{t('Privacy')}</span>
          </span>
          <span className='narrow-screen'>
            <span className='inline flex-center'><Cookie/>{t('Privacy')}</span>
          </span>
        </BarItem>
        <BarItem>
          <span className='wide-screen'>
            <span className='inline flex-center bar-spaced'><Copyright/>Daniel Smit 2021</span>
          </span>
        </BarItem>
      </div>   
    </div>
  );
};

export default BottomBar;