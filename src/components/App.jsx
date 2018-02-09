import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import TapArea from './TapArea';



function App(){
  return (
    <div>
      <style global jsx>
        {`
          body{
            background-image: url(https://images.pexels.com/photos/172289/pexels-photo-172289.jpeg?w=940&h=650&auto=compress&cs=tinysrgb);
            background-size: cover;
            background-repeat: no-repeat;
          }
        `}
      </style>
      <Header/>
      <TapArea/>
    </div>
  );
}

export default App;
