import React from 'react';
import { TabType } from '../../types';
import BarItem from '../items/barItem';
import { Asterisk, X } from 'phosphor-react';
import i18n from '../../i18nextConf';
import { useTranslation } from 'react-i18next';
import './gameTabBar.css';
import '../../App.css';

interface TabBarItemProps {
  ID: string;
  type: TabType,
  title?: string;
  player?: string;
  rating?: number;
  to?: string;
  link?: string;
  newTab?: boolean;
  closeTabHandler: (ID: string, type: TabType) => void;
}

function GetEnumText(type: TabType){
  switch(type){
    case TabType.Game: return 'Game';
    case TabType.Info: return 'Info';
    case TabType.TV: return 'TV';
    default: return 'Unknown';
  }
}

function TabBarItem(Props: TabBarItemProps) {
  const { t } = useTranslation('translation', { i18n });

  function CloseTab(){
    Props.closeTabHandler(Props.ID, Props.type);
  }

  function IsActiveTab(){
    return window.location.pathname === Props.to;
  }

  function GetTabText(Props: TabBarItemProps){
    let title = Props.title ? Props.title : '';
    let rating = Props.rating ? `(${Props.rating})` : '';
    let id = Props.ID && (Props.type === TabType.Game || Props.type === TabType.Info) ? `#${Props.ID}` : '';
    let props = [t(title), Props.player, id, rating];
    let text = props.filter(Boolean).join(' ');
    return (<span className='tab-text'>{text.length > 1 ? text : GetEnumText(Props.type)}</span>);
  }

  return (
    <span className={`tab-item ${IsActiveTab() ? 'active-tab' : 'inactive-tab' }`}>
      <Asterisk/>
      <BarItem to={Props.to} link={Props.link} newTab={Props.newTab}>{GetTabText(Props)}</BarItem>
      <BarItem mouseUpHandler={CloseTab}><X/></BarItem>
    </span>
  );
};

export default TabBarItem;