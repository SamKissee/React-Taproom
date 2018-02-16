import React from 'react';
import Filter from './Filter';
import { Link } from 'react-router-dom';
import logo from '../assets/images/taplogo.png';
import greengrowler from '../assets/images/greengrowler.png';
import redgrowler from '../assets/images/redgrowler.png';
import bluegrowler from '../assets/images/bluegrowler.png';




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
          .growler{
            height: 100px;
            width: auto;
          }
          .growlerDiv{
            display: flex;
          }
          .imgholder{
            position: relative;
          }
          .imgholder p {
            position: absolute;
            top: 30px;
            left: 105px;
          }
          button{
            padding: 10px;
            margin: 3px;
            border: none;
            border-radius: 5px;
            color: white;
            background: teal;
          }
      
        `}
      </style>
      <div>
        <img src={logo}/>
      </div>
      <h2>Price List</h2>
      <div className='growlerDiv'>
        <div className='imgholder'>
          <img className='growler' src={greengrowler}/>
          <p>$5</p>
        </div>
        <div className='imgholder'>
          <img className='growler' src={bluegrowler}/>
          <p>$7</p>
        </div>
        <div className='imgholder'>
          <img className='growler' src={redgrowler}/>
          <p>$8</p>
        </div>

      </div>
      <div>
        <button><Link className='link' to="/"> Home </Link></button>
        <button><Link className='link' to="/staff"> Staff </Link></button>
      </div>

    </div>
  );


}

export default Header;
