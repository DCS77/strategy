import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './barItem.css';

interface BarItemProps {
  icon?: string;
  iconClass?: string;
  to?: string;
  link?: string;
  inline?: boolean;
  newTab?: boolean;
  tabItem?: boolean;
  largeButtons?: boolean;
  narrowCentred?: boolean;
  standout?: boolean;
  disableStyle?: boolean;
  children: React.ReactNode;
  mouseUpHandler?: () => void;
  mouseDownHandler?: () => void;
  onBlur?: () => void;
}

interface LinkProps {
  to?: string;
  link?: string;
  newTab?: boolean;
  disableStyle?: boolean;
  children: React.ReactNode;
}

const ItemLink = (Props: LinkProps) => {
  const {
    children, disableStyle, link, newTab, to,
  } = Props;
  const [hrefTarget] = useState(newTab ? '_blank' : '');

  if (to) {
    return (
      <Link to={to}>
        {children}
      </Link>
    );
  }
  if (link) {
    return (
      <a href={link} target={hrefTarget}>
        {children}
      </a>
    );
  }
  return (
    <span className={disableStyle ? '' : 'on-click-link'}>
      {children}
    </span>
  );
};

const BarItem = (Props: BarItemProps) => {
  const {
    children, disableStyle, icon, iconClass, inline, narrowCentred, largeButtons, link,
    mouseDownHandler, mouseUpHandler, onBlur, newTab, standout, tabItem, to,
  } = Props;

  const ButtonPressed = (event: any) => {
    if (mouseUpHandler) {
      mouseUpHandler();
    }
  };

  return (
    <span
      className='itemContainer no-select'
      onBlur={onBlur}
      onMouseUp={ButtonPressed}
      onMouseDown={mouseDownHandler}
      role='button'
      tabIndex={0}
    >
      <ItemLink to={to} link={link} newTab={newTab} disableStyle={disableStyle}>
        <span className={`${to || link || mouseUpHandler || mouseDownHandler ? 'pointing-cursor' : 'default-cursor'}
                            ${inline ? '' : 'item'}
                            ${tabItem ? 'tab-item' : ''}
                            ${largeButtons ? 'large-buttons' : ''}
                            ${narrowCentred ? 'nav-bar-settings' : ''}
                            ${standout ? 'standout-bar-item' : ''}`}
        >
          {icon ? (<img src={icon} alt='icon' className={iconClass} />) : null}
          {children}
        </span>
      </ItemLink>
    </span>
  );
};

export default BarItem;
