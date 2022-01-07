import React, { ReactNode } from 'react';
import NavigationList from '../../components/navigation/navigationList';
import '../page.css';

interface ViewProps {
  Elements: Array<ReactNode>;
}

export const DefaultNarrowView = (Props: ViewProps) => {
  const { Elements } = Props;
  return (
    <>
      <div className='nav-bar-horizontal vertical-padding-top vertical-padding-bottom'>
        <NavigationList />
      </div>
      {Elements.map((Element, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className='vertical-padding-bottom'>
          {Element}
        </div>
      ))}
    </>
  );
};

export default DefaultNarrowView;
