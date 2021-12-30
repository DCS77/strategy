import React from 'react';
import './home.css';
import '../App.css';
import { useTranslation } from 'react-i18next';
import NavigationList from '../components/navigation/navigationList';
import Logo from '../images/rc.svg';
import i18n from '../i18nextConf';

interface ViewProps {
  t: any;
}

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
        {t('News and Updates')}
      </div>
      <div className='chat-column'>{t('Chat')}</div>
    </div>
  );
};

const Home = () => {
  const { t } = useTranslation('translation', { i18n });

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
