import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Staff from './Staff';
import TapArea from './TapArea';
import bg from '../assets/images/bg.jpg';




function App(){
  return (
    <div>
      <style global jsx>
        {`
          body{
            background-image: url({bg});
            background-size: cover;
            background-repeat: no-repeat;
          }
        `}
      </style>
      <Header/>
      <Switch>
        <Route exact path='/' component={TapArea} />
        <Route path='/staff' component={Staff} />
      </Switch>
    </div>
  );
}

export default App;
