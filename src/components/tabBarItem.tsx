import React from 'react';
import { TabType } from '../types';
import BarItem from './barItem';
import { Asterisk, X } from 'phosphor-react';
import i18n from '../i18nextConf';
import { useTranslation } from 'react-i18next';
import './gameTabBar.css';
import '../App.css';

interface TabBarItemProps {
  Type: TabType,
  Title?: string;
  Player?: string;
  Rating?: number;
  ID?: string;
  to?: string;
  link?: string;
  newTab?: boolean;
}

function GetEnumText(type: TabType){
  switch(type){
    case TabType.Game: return 'Game';
    case TabType.Info: return 'Info';
  }
}

function TabBarItem(Props: TabBarItemProps) {
  const { t } = useTranslation('translation', { i18n });

  function GetTabText(Props: TabBarItemProps){
    let gameTitle = Props.Title? Props.Title : '';
    let rating = Props.Rating? `(${Props.Rating})` : '';
    let id = Props.ID? `#${Props.ID}` : '';
    let props = [t(gameTitle), Props.Player, id, rating];
    let text = props.filter(Boolean).join(' ');
    return text.length > 1 ? text : GetEnumText(Props.Type);
  }

  return (
    <span>
      {/* <Asterisk/> */}
      <BarItem to={Props.to} link={Props.link} newTab={Props.newTab}>{GetTabText(Props)}</BarItem>  
      {/* <X/> */}
    </span>
  );
};

export default TabBarItem;