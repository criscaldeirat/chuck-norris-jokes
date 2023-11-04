import React from 'react';
import chuckNorris1 from './media/chuckNorris1.png';
import chuckNorris2 from './media/chuckNorris2.png';
import './App.css';
import RandomJoke from './API/RandomJoke';
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/vimeo'
import 'react-social-icons/meetup'


function App() {





  return (
    <div className="App">
      <div className="App-header">
        <img src={chuckNorris2} className="header-img chuckImg-2" alt="Chuck Norris Eye Closed" />
        <p className='title'>
          <strong>CHUCK NORRIS</strong> 
          <br />
          BEST JOKES
        </p>
        <img src={chuckNorris1} className="header-img chuckImg-1" alt="Chuck Norris Cowboy" />
      </div>
      
      <RandomJoke />

      <div className='footer'>
        <p>Made by Cristina Teixeira, Check out the code 
          <a href='https://github.com/criscaldeiraa/Chuck-Norris-Jokes'> here.</a>
        </p>
        <p>Thank you to <a href='https://api.chucknorris.io/#!' >chucknorris.io</a> for the API</p>

        <div className='SocialIcons'>
          <SocialIcon 
            style={{ width: '25px', height: '25px', borderRadius: '100%', margin: '5px' }} 
            network="github"
            url="https://github.com/criscaldeiraa" 
            bgColor="grey" 
            fgColor="white" 
            target="_blank"
            />
          <SocialIcon 
            style={{ width: '25px', height: '25px', borderRadius: '100%', margin: '5px' }} 
            network="x" 
            url="https://twitter.com/criscaldeiraa" 
            bgColor="grey" 
            fgColor="white" 
            target="_blank"
            />
          <SocialIcon 
            style={{ width: '25px', height: '25px', borderRadius: '100%', margin: '5px' }} 
            network="instagram" 
            url="https://www.instagram.com/criscaldeirat/" 
            bgColor="grey" 
            fgColor="white" 
            target="_blank" />
        </div>
      </div>

    </div>
  );
}

export default App;
