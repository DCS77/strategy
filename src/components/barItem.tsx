import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './barItem.css';

interface BarItemProps {
  icon?: string;
  to?: string;
  link?: string;
  newTab?: boolean;
  children: React.ReactNode;
  mouseUpHandler?: () => void;
  mouseDownHandler?: () => void;
}

interface LinkProps {
  to?: string;
  link?: string;
  newTab?: boolean;
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
      <span className='on-click-link'>
        {Props.children}
      </span>
    );
  }
}

function BarItem(Props: BarItemProps) {
  return (
    <div className='itemContainer hover-tint' onMouseUp={Props.mouseUpHandler} onMouseDown={Props.mouseDownHandler}>
      <ItemLink to={Props.to} link={Props.link} newTab={Props.newTab}>
        <div className='item'>
          {Props.icon ? (<img src={Props.icon} alt='icon'/>) : null}
          {Props.children}
        </div>
      </ItemLink>
    </div>
  );
};

export default BarItem;