import React from 'react';
import './home.css';
import '../App.css';
import { useTranslation } from 'react-i18next';
import NavigationList from '../components/navigation/navigationList';
import i18n from '../i18nextConf';

const Home = () => {
  const { t } = useTranslation('translation', { i18n });

  return (
    <div className='full-size homeRow'>
      <div className='navigationColumn'>
        <NavigationList />
      </div>
      <div className='centerColumn'>{t('News and Updates')}</div>
      <div className='chatColumn'>{t('Chat')}</div>
    </div>
  );
};

export default Home;
