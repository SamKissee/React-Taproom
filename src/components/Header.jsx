import React from 'react';
import Filter from './Filter';
// import logo from '../assets/images/taplogo.png';



function Header(){
  return (
    <div>
      <style jsx>
        {`
          div{
            width: 60%;
            margin: 10px auto;
          }
          img {
            width: 100%;
            height: auto;
            margin: 10px auto;
          }
        `}
      </style>
      <div>
        <img src='http://static1.squarespace.com/static/53ff5f59e4b0e51709fb53b8/t/53ff6a6ae4b09b99036e04ac/1517854877695/?format=1500w'/>
      </div>
      <Filter/>
    </div>
  );


}

export default Header;
