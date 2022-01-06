import React, { useEffect } from 'react';
import './home.css';
import '../App.css';
import { useTranslation } from 'react-i18next';
import NavigationList from '../components/navigation/navigationList';
import Logo from '../images/rc.svg';
import i18n from '../i18nextConf';

interface ViewProps {
  t: any;
}

const LanguageWarning = () => {
  if (i18n.resolvedLanguage === 'en' || i18n.resolvedLanguage === 'es' || i18n.resolvedLanguage === 'ja') {
    return null;
  }
  return (
    <p>
      Note: Your language is currently set to '{i18n.language}'.
      Unfortunately, only English (en), Spanish (es) and Japanese (ja) are currently supported.
      Please change to one of these using the language selector at the top of the page.
    </p>
  );
};

const NarrowHomeView = (Props: ViewProps) => {
  const { t } = Props;
  return (
    <>
      <div className='nav-bar-horizontal vertical-padding-top vertical-padding-bottom'>
        <NavigationList />
      </div>
      <div className='vertical-padding-bottom'>
        <span className='home-logo-container'>
          <img src={Logo} alt='icon' className='home-logo' />
        </span>
        {t('News and Updates')}
        <h1>{t('News and Updates')}</h1>
        This is still in development.<br />
        Try visiting the Your Armies page to view existing armies or create a new one.<br />
        The next features include user accounts and the ability to connect players for a game.
        <LanguageWarning />
      </div>
      <div className='vertical-padding-bottom'>{t('Chat')}</div>
    </>
  );
};

const WideHomeView = (Props: ViewProps) => {
  const { t } = Props;
  return (
    <div className='full-size home-row'>
      <div className='navigation-column'>
        <NavigationList />
      </div>
      <div className='center-column'>
        <p>
          <span className='home-logo-container'>
            <img src={Logo} alt='icon' className='home-logo' />
          </span>
        </p>
        <h1>{t('News and Updates')}</h1>
        This is still in development.<br />
        Try visiting the Your Armies page to view existing armies or create a new one.<br />
        The next features include user accounts and the ability to connect players for a game.
        <LanguageWarning />
      </div>
      <div className='chat-column'>{t('Chat')}</div>
    </div>
  );
};

const Home = () => {
  const { t } = useTranslation('translation', { i18n });

  useEffect(() => {
    document.title = 'RC | ReadyCompete Home';
  });

  return (
    <>
      <div className='narrow-screen'>
        <NarrowHomeView t={t} />
      </div>
      <div className='wide-screen'>
        <WideHomeView t={t} />
      </div>
    </>
  );
};

export default Home;
