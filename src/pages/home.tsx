import React from 'react';
import './home.css';
import '../App.css';

interface HomeProps {}

function Home(Props: HomeProps) {
  return (
    <div className='full-size homeRow'>
      <div className='navigationColumn'>Menu</div>
      <div className='boardColumn'>Board</div>
      <div className='chatColumn'>Chat</div>
    </div>
  )
};

export default Home;