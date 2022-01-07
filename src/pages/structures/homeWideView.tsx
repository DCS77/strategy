import React, { ReactNode } from 'react';
import NavigationList from '../../components/navigation/navigationList';
import './wideView.css';

interface ViewProps {
  BottomLeft?: ReactNode;
  Centre?: ReactNode;
  Right?: ReactNode;
}

const HomeWideView = (Props: ViewProps) => {
  const {
    BottomLeft, Centre, Right,
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
        {Right}
      </div>
    </div>
  );
};

export default HomeWideView;
