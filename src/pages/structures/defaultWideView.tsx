import React, { ReactNode } from 'react';
import NavigationList from '../../components/navigation/navigationList';
import './wideView.css';

interface ViewProps {
  BottomLeft?: ReactNode;
  BottomRight?: ReactNode;
  Centre?: ReactNode;
  TopRight?: ReactNode;
}

const DefaultWideView = (Props: ViewProps) => {
  const {
    BottomLeft, BottomRight, Centre, TopRight,
  } = Props;
  return (
    <div className='full-size game-row'>
      <div className='left-column'>
        <div className='nav-section'>
          <NavigationList />
        </div>
        <div className={BottomLeft ? 'bottom-left-section' : ''}>
          {BottomLeft}
        </div>
      </div>
      <div className='centre-column'>
        {Centre}
      </div>
      <div className='right-column'>
        <div className={TopRight ? 'top-right-section' : ''}>
          {TopRight}
        </div>
        <div className={BottomRight ? 'bottom-right-section' : ''}>
          {BottomRight}
        </div>
      </div>
    </div>
  );
};

export default DefaultWideView;
