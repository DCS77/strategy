import React from 'react';
import './toggleSwitch.css';

interface ToggleProps {
  alt: string;
  checked: boolean;
  clickHandler: (checked: boolean) => void;
}

const Switch = (Props: ToggleProps) => {
  const { alt, checked, clickHandler } = Props;

  function onClickSwitch(event: any) {
    clickHandler(event.target.checked);
  }

  return (
    <div className='switch' role='checkbox' aria-checked={checked}>
      <label htmlFor='themeSelector'>
        <input id='themeSelector' checked={checked} alt={alt} onChange={onClickSwitch} type='checkbox' />
        <span className='slider round' />
      </label>
    </div>
  );
};

export default Switch;
