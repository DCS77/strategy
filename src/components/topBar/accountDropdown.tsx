import React from 'react';
import BarItem from '../items/barItem';
import i18n from '../../i18nextConf';
import { useTranslation } from 'react-i18next';
import '../../App.css';

interface AccountDropdownProps {
  onClickAnyItem: () => void;
}

function AccountDropdownMenu(Props: AccountDropdownProps) {
  const { t } = useTranslation('translation', { i18n });

  function ClickLogin(){ Props.onClickAnyItem(); }
  function ClickRegister(){ Props.onClickAnyItem(); }
  function ClickProfile(){ Props.onClickAnyItem(); }
  function ClickSettings(){ Props.onClickAnyItem(); }
  function ClickLogout(){ Props.onClickAnyItem(); }

  return (
    <div className='dropdown-menu passero'>
      <BarItem mouseUpHandler={ClickLogin}>{t('Login')}</BarItem>
      <BarItem mouseUpHandler={ClickRegister}>{t('Register')}</BarItem>
      <BarItem mouseUpHandler={ClickProfile}>{t('Profile')}</BarItem>
      <BarItem mouseUpHandler={ClickSettings}>{t('Settings')}</BarItem>
      <BarItem mouseUpHandler={ClickLogout}>{t('Logout')}</BarItem>
    </div>
  );
};

export default AccountDropdownMenu;