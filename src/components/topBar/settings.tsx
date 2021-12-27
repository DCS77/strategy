
import React from 'react';
import Switch from '../items/toggleSwitch';
import BarItem from '../items/barItem';
import { Translate, PaintRoller, CaretDown, User } from 'phosphor-react';
import i18n from '../../i18nextConf';
import { useTranslation } from 'react-i18next';
import { useStateValue } from '../../state/state';
import '../../App.css';

interface SettingsProps {
  onAccountMouseUp: () => void;
  onAccountMouseDown: () => void;
  onLanguageMouseUp: () => void;
  onLanguageMouseDown: () => void;
}

function Settings(Props: SettingsProps) {
  const { t } = useTranslation('translation', { i18n });
  const { state, dispatch } = useStateValue();

  function ToggleTheme(checked: boolean) {
    dispatch({
      type: 'changeTheme',
      value: checked ? 'dark' : 'light'
    });
  }

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
            checked={state.pageLayout.theme === 'dark'}
            clickHandler={ToggleTheme}
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

export default Settings;