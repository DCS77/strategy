
import React, { useState, useEffect } from 'react';
// import GridLayout from 'react-grid-layout';
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import './home.css';
import '../../App.css';
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';

interface Size {
  width: number;
  height: number;
}

interface HomeProps {
  getSize: () => Size;
}

function Home(Props: HomeProps) {
  const [maxRows] = useState(1);
  const [rowHeight, setRowHeight] = useState(50);
  const [width, setWidth] = useState(800);
  const [breakpoints] = useState({'lg': 1200, 'md': 996, 'sm': 768, 'xs': 480, 'xxs': 200});
  const [cols] = useState({'lg': 12, 'md': 10, 'sm': 6, 'xs': 4, 'xxs': 2});

  useEffect(() => {
    setRowHeight(Props.getSize().height);
    setWidth(Props.getSize().width);
  });

  return (
    <div className='full-size'>
      <ResponsiveGridLayout
        className='layout on-click-link'
        width={width}
        // rowHeight={rowHeight}
        maxRows={maxRows}
        autoSize={false}
        breakpoints={breakpoints}
        cols={cols}
        isBounded={true}
        resizeHandles={['nw', 'ne', 'sw', 'se']}
        verticalCompact={true}
        useCSSTransforms={true}
        compactType='horizontal'
        draggableHandle='.drag-me'
        draggableCancel='.no-drag-me'>
        <div className='navigation' key='a'>
          Directory
          <div className='drag-me'>Drag me</div>
          <div className='no-drag-me'>Dont drag me</div>
        </div>
        <div className='board' key='b'>
          Arena TV Board
          <div className='drag-me'>Drag me</div>
          <div className='no-drag-me'>Dont drag me</div>
        </div>
        <div className='chat' key='c'>
          Arena TV Chat
          <div className='drag-me'>Drag me</div>
          <div className='no-drag-me'>Dont drag me</div>
        </div>
      </ResponsiveGridLayout>
    </div>
  )

  // return (
  //   <span>Home Page</span>
  // );
};

export default Home;