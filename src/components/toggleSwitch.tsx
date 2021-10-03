import React, { useState } from 'react';
import './toggleSwitch.css';

interface ToggleProps {
  alt: string;
  checked: boolean;
  clickHandler: (checked: boolean) => void;
}

function Switch(Props: ToggleProps) {
  function onClickSwitch(event: any) {
    Props.clickHandler(event.target.checked);
  }

  return (
    <label className="switch">
      <input checked={Props.checked} alt={Props.alt} onChange={onClickSwitch} type="checkbox"></input>
      <span className="slider round"></span>
    </label>
  );
};

export default Switch;