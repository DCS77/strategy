import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import {
  Translate, PaintRoller, CaretDown, User,
} from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import Switch from '../items/toggleSwitch';
import BarItem from '../items/barItem';
import i18n from '../../i18nextConf';
import { useStateValue } from '../../state/state';
import '../../App.css';

interface SettingsProps {
  onAccountMouseUp: () => void;
  onAccountMouseDown: () => void;
  onLanguageMouseUp: () => void;
  onLanguageMouseDown: () => void;
}

const Settings = (Props: SettingsProps) => {
  const {
    onLanguageMouseUp, onLanguageMouseDown, onAccountMouseUp, onAccountMouseDown,
  } = Props;
  const { t } = useTranslation('translation', { i18n });
  const [username, setUsername] = useState(t('Account'));
  const { state, dispatch } = useStateValue();

  function ToggleTheme(checked: boolean) {
    dispatch({
      type: 'changeTheme',
      value: checked ? 'dark' : 'light',
    });
  }

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((data) => setUsername(data.username))
      .catch((err) => console.log('Error finding user', err));
  }, [Auth]);

  return (
    <>
      <BarItem mouseUpHandler={onLanguageMouseUp} mouseDownHandler={onLanguageMouseDown}>
        <span className='wide-screen'>
          <span className='inline flex-centre bar-spaced'><Translate /></span>
        </span>
        <span className='narrow-screen'>
          <span className='inline flex-centre'><Translate /></span>
        </span>
      </BarItem>
      <BarItem>
        <span className='wide-screen inline flex-centre bar-spaced'>
          <PaintRoller />
          <Switch
            alt='Change theme'
            checked={state.pageLayout.theme === 'dark'}
            clickHandler={ToggleTheme}
          />
        </span>
      </BarItem>
      <BarItem mouseUpHandler={onAccountMouseUp} mouseDownHandler={onAccountMouseDown}>
        <span className='wide-screen bar-spaced'>
          <span className='inline flex-centre bar-spaced'>
            {username}
            <CaretDown />
          </span>
        </span>
        <span className='narrow-screen'>
          <span className='inline flex-centre'>
            <User />
            <CaretDown />
          </span>
        </span>
      </BarItem>
    </>
  );
};

export default Settings;
