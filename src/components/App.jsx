import React from 'react';
import Header from './Header';
import ClassContainer from './ClassContainer';
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
      <ClassContainer/>
    </div>
  );
}

export default App;
