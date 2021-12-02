import React from 'react';
import './home.css';
import '../App.css';
import NavigationList from '../components/navigation/navigationList';

interface HomeProps {}

function Home(Props: HomeProps) {
  return (
    <div className='full-size homeRow'>
      <div className='navigationColumn'>
        <NavigationList/>
      </div>
      <div className='centerColumn'>News and live content in scrollable element</div>
      <div className='chatColumn'>Chat</div>
    </div>
  )
};

export default Home;