import React from 'react';
import TapArea from './TapArea';
import Staff from './Staff';
import { Switch, Route } from 'react-router-dom';



function ClassContainer(){
  return (
    <div>
      <Switch>
        <Route exact path='/' component={TapArea} />
        <Route path='/staff' component={Staff} />
      </Switch>
    </div>
  );
}

export default ClassContainer;
