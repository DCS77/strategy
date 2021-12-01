
import React from 'react';
import Switch from '../toggleSwitch';
import BarItem from '../barItem';
import { Translate, PaintRoller, CaretDown, User } from 'phosphor-react';
import i18n from '../../i18nextConf';
import { useTranslation } from 'react-i18next';
import '../../App.css';

interface SettingsProps {
  theme: string;
  onClickThemeSwitch: (checked: boolean) => void;
  onAccountMouseUp: () => void;
  onAccountMouseDown: () => void;
  onLanguageMouseUp: () => void;
  onLanguageMouseDown: () => void;
}

function SettingsProps(Props: SettingsProps) {
  const { t } = useTranslation('translation', { i18n });

  return (
    <React.Fragment>
      <BarItem mouseUpHandler={Props.onLanguageMouseUp} mouseDownHandler={Props.onLanguageMouseDown}>
        <span className='wide-screen'>
          <span className='inline flex-center bar-spaced'><Translate/></span>
        </span>
        <span className='narrow-screen'>
          <span className='inline flex-center'><Translate/></span>
        </span>
      </BarItem>
      <BarItem>
        <span className='wide-screen inline flex-center bar-spaced'>
          <PaintRoller/>
          <Switch
            alt='Change theme'
            checked={Props.theme === 'dark'}
            clickHandler={Props.onClickThemeSwitch}
          />
        </span>
      </BarItem>
      <BarItem mouseUpHandler={Props.onAccountMouseUp} mouseDownHandler={Props.onAccountMouseDown}>
        <span className='wide-screen bar-spaced'>
          <span className='inline flex-center bar-spaced'>{t('Account')}<CaretDown/></span>
        </span>
        <span className='narrow-screen'>
          <span className='inline flex-center'><User/><CaretDown/></span>
        </span>
      </BarItem>
    </React.Fragment>
  );
};

export default SettingsProps;