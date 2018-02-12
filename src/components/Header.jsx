import React from 'react';
import Filter from './Filter';
import { Link } from 'react-router-dom';
import logo from '../assets/images/taplogo.png';



function Header(){
  return (
    <div>
      <style jsx>
        {`
          div{
            width: 60%;
            margin: 10px auto;
            color: white;
            text-align: center;
          }
          img {
            width: 100%;
            height: auto;
            margin: 10px auto;
          }
          .link {
            color: white;
            text-decoration: none;
          }
        `}
      </style>
      <div>
        <img src={logo}/>
      </div>
      <div>
        <Link className='link' to="/"> Home </Link> | <Link className='link' to="/staff"> Staff </Link>
      </div>

    </div>
  );


}

export default Header;
