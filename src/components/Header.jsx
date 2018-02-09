import React from 'react';
import Filter from './Filter';
// import logo from '../assets/images/taplogo.png';



function Header(){
  return (
    <div>
      <img src={require('../assets/images/taplogo.png' )} />
      <Filter/>
    </div>
  );


}

export default Header;
