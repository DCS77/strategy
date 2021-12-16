import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './barItem.css';

interface BarItemProps {
  icon?: string;
  to?: string;
  link?: string;
  inline?: boolean;
  newTab?: boolean;
  tabItem?: boolean;
  largeButtons?: boolean;
  standout?: boolean;
  disableStyle?: boolean;
  children: React.ReactNode;
  mouseUpHandler?: () => void;
  mouseDownHandler?: () => void;
}

interface LinkProps {
  to?: string;
  link?: string;
  newTab?: boolean;
  disableStyle?: boolean;
  children: React.ReactNode;
}

function ItemLink(Props: LinkProps){
  const [hrefTarget] = useState(Props.newTab ? '_blank' : '');

  if(Props.to) {
    return (
      <Link to={Props.to}>
        {Props.children}
      </Link>
    );
  } 
  else if(Props.link) {
    return (
      <a href={Props.link} target={hrefTarget}>
        {Props.children}
      </a>
    );
  } else {
    return (
      <span className={Props.disableStyle ? '' : 'on-click-link'}>
        {Props.children}
      </span>
    );
  }
}

function BarItem(Props: BarItemProps) {
  return (
    <span className='itemContainer no-select' onMouseUp={Props.mouseUpHandler} onMouseDown={Props.mouseDownHandler}>
      <ItemLink to={Props.to} link={Props.link} newTab={Props.newTab} disableStyle={Props.disableStyle}>
        <span className={`pointingCursor
                          ${Props.inline ? '' : 'item'}
                          ${Props.tabItem ? 'tab-item' : ''}
                          ${Props.largeButtons ? 'large-buttons' : ''}
                          ${Props.standout ? 'standout-bar-item' : ''}`}>
          {Props.icon ? (<img src={Props.icon} alt='icon'/>) : null}
          {Props.children}
        </span>
      </ItemLink>
    </span>
  );
};

export default BarItem;