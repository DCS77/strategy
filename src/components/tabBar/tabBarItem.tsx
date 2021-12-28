import React from 'react';
import { Asterisk, X } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { useStateValue } from '../../state/state';
import { TabType } from '../../types';
import BarItem from '../items/barItem';
import i18n from '../../i18nextConf';
import './gameTabBar.css';
import '../../App.css';

interface TabBarItemProps {
  id: string;
  type: TabType,
  title?: string;
  player?: string;
  rating?: number;
  to?: string;
  link?: string;
  newTab?: boolean;
}

function GetEnumText(type: TabType) {
  switch (type) {
    case TabType.Game: return 'Game';
    case TabType.Info: return 'Info';
    case TabType.TV: return 'TV';
    default: return 'Unknown';
  }
}

const GetTabText = (TabTextProps: TabBarItemProps) => {
  const { t } = useTranslation('translation', { i18n });
  const {
    id, player, rating, title, type,
  } = TabTextProps;
  const titleString = title || '';
  const playerString = player || '';
  const ratingString = rating ? `(${rating})` : '';
  const idString = id && (type === TabType.Game || type === TabType.Info) ? `#${id}` : '';
  const tabTextFields = [t(titleString), playerString, idString, ratingString];
  const text = tabTextFields.filter(Boolean).join(' ');
  return (<span className='tab-text'>{text.length > 1 ? text : GetEnumText(type)}</span>);
};

const TabBarItem = (Props: TabBarItemProps) => {
  const { dispatch } = useStateValue();
  const {
    id, link, newTab, to, type,
  } = Props;

  function CloseTab() {
    dispatch({
      type: 'closeTab',
      value: { id, type },
    });
  }

  function IsActiveTab() {
    return window.location.pathname === to;
  }

  return (
    <span className={`tab-item ${IsActiveTab() ? 'active-tab' : 'inactive-tab'}`}>
      <Asterisk />
      <BarItem to={to} link={link} newTab={newTab}>{GetTabText(Props)}</BarItem>
      <BarItem mouseUpHandler={CloseTab}><X /></BarItem>
    </span>
  );
};

export default TabBarItem;
