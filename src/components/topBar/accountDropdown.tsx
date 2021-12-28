import React from 'react';
import { useTranslation } from 'react-i18next';
import BarItem from '../items/barItem';
import i18n from '../../i18nextConf';
import '../../App.css';

interface AccountDropdownProps {
  onBlur: () => void;
  onClickAnyItem: () => void;
}

const AccountDropdownMenu = (Props: AccountDropdownProps) => {
  const { t } = useTranslation('translation', { i18n });
  const { onBlur, onClickAnyItem } = Props;

  function ClickLogin() { onClickAnyItem(); }
  function ClickRegister() { onClickAnyItem(); }
  function ClickProfile() { onClickAnyItem(); }
  function ClickSettings() { onClickAnyItem(); }
  function ClickLogout() { onClickAnyItem(); }

  return (
    <div className='dropdown-menu passero'>
      <BarItem onBlur={onBlur} mouseUpHandler={ClickLogin}>{t('Login')}</BarItem>
      <BarItem onBlur={onBlur} mouseUpHandler={ClickRegister}>{t('Register')}</BarItem>
      <BarItem onBlur={onBlur} mouseUpHandler={ClickProfile}>{t('Profile')}</BarItem>
      <BarItem onBlur={onBlur} mouseUpHandler={ClickSettings}>{t('Settings')}</BarItem>
      <BarItem onBlur={onBlur} mouseUpHandler={ClickLogout}>{t('Logout')}</BarItem>
    </div>
  );
};

export default AccountDropdownMenu;
