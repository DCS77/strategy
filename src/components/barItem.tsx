import React, { useState } from 'react';
import './barItem.css';

interface ItemProps {
  link?: string;
  icon?: string;
  children: React.ReactNode;
}

function Switch(Props: ItemProps) {
  return (
    <div className="itemContainer">
      <a href={Props.link}>
        <div className="item">
          {Props.icon ? (<img src={Props.icon}/>) : null}
          {Props.children}
        </div>
      </a>
    </div>
  );
};

export default Switch;