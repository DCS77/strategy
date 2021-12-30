import React from 'react';
import {
  GithubLogo, UserRectangle, CurrencyCircleDollar, Scales, Cookie, Copyright,
} from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import BarItem from '../items/barItem';
import i18n from '../../i18nextConf';
import './bottomBar.css';
import '../../App.css';

const BottomBar = () => {
  const { t } = useTranslation('translation', { i18n });

  return (
    <div className='footer inline'>
      <div className='left-group inline'>
        <BarItem link='https://github.com/DCS77/strategy' newTab>
          <span className='wide-screen'>
            <span className='inline flex-centre bar-spaced'><GithubLogo />{t('Github')}</span>
          </span>
          <span className='narrow-screen'>
            <span className='inline flex-centre'><GithubLogo />{t('Github')}</span>
          </span>
        </BarItem>
        <BarItem to='/contact'>
          <span className='wide-screen'>
            <span className='inline flex-centre bar-spaced'><UserRectangle />{t('Contact')}</span>
          </span>
          <span className='narrow-screen'>
            <span className='inline flex-centre'><UserRectangle />{t('Contact')}</span>
          </span>
        </BarItem>
        <BarItem to='/donate'>
          <span className='wide-screen'>
            <span className='inline flex-centre bar-spaced'><CurrencyCircleDollar />{t('Donate')}</span>
          </span>
          <span className='narrow-screen'>
            <span className='inline flex-centre'><CurrencyCircleDollar />{t('Donate')}</span>
          </span>
        </BarItem>
      </div>
      <div className='right-group inline'>
        <BarItem to='/terms'>
          <span className='wide-screen'>
            <span className='inline flex-centre bar-spaced'><Scales />{t('Terms of Use')}</span>
          </span>
          <span className='narrow-screen'>
            <span className='inline flex-centre'><Scales />{t('Terms of Use')}</span>
          </span>
        </BarItem>
        <BarItem to='/privacy'>
          <span className='wide-screen'>
            <span className='inline flex-centre bar-spaced'><Cookie />{t('Privacy')}</span>
          </span>
          <span className='narrow-screen'>
            <span className='inline flex-centre'><Cookie />{t('Privacy')}</span>
          </span>
        </BarItem>
        <BarItem>
          <span className='wide-screen'>
            <span className='inline flex-centre bar-spaced'><Copyright />Daniel Smit 2021</span>
          </span>
        </BarItem>
      </div>
    </div>
  );
};

export default BottomBar;
