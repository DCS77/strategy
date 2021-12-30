import React from 'react';
import './home.css';
import '../App.css';
import { useTranslation } from 'react-i18next';
import NavigationList from '../components/navigation/navigationList';
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
      <div className='vertical-padding-bottom'>{t('News and Updates')}</div>
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
      <div className='center-column'>{t('News and Updates')}</div>
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
