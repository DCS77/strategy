import React from 'react';
import { useTranslation } from 'react-i18next';
import { Auth } from 'aws-amplify';
import BarItem from '../items/barItem';
import i18n from '../../i18nextConf';
import '../../App.css';

interface AccountDropdownProps {
  onBlur: () => void;
  onClickAnyItem: () => void;
  loggedIn: boolean;
}

const AccountDropdownMenu = (Props: AccountDropdownProps) => {
  const { t } = useTranslation('translation', { i18n });
  const { loggedIn, onBlur, onClickAnyItem } = Props;

  function ClickLogin() { onClickAnyItem(); }
  function ClickRegister() { onClickAnyItem(); }
  function ClickProfile() {
    Auth.currentAuthenticatedUser()
      .then((data) => console.log('User data', data))
      .catch((err) => console.log('Error finding user', err));
    onClickAnyItem();
  }
  function ClickSettings() { onClickAnyItem(); }
  function ClickLogout() {
    Auth.signOut()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    onClickAnyItem();
  }

  if (loggedIn) {
    return (
      <div className='dropdown-menu'>
        <BarItem onBlur={onBlur} mouseUpHandler={ClickProfile}>{t('Profile')}</BarItem>
        <BarItem onBlur={onBlur} mouseUpHandler={ClickSettings}>{t('Settings')}</BarItem>
        <BarItem onBlur={onBlur} mouseUpHandler={ClickLogout}>{t('Logout')}</BarItem>
      </div>
    );
  }

  return (
    <div className='dropdown-menu'>
      <BarItem onBlur={onBlur} mouseUpHandler={ClickLogin}>{t('Login')}</BarItem>
      <BarItem onBlur={onBlur} mouseUpHandler={ClickRegister}>{t('Register')}</BarItem>
    </div>
  );
};

export default AccountDropdownMenu;
