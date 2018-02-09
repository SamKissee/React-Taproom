import React from 'react';
import PropTypes from 'prop-types';

function Tap(props){
  return (
    <div>
      <style jsx>
        {`
          .beerImg {
            display: flex;
            justify-content: center;
          }
          img {
            height: 100px;
            width: auto;
            border-radius: 3px;
          }
          h4{
            margin: 0px;
            color: lightblue;
          }
          h2{
            margin: 5px 0px;
            text-align: center;
          }
          p {
            margin: 5px 0px;
            font-weight: 300;
          }
          .option{
            margin: 10px 8px 0px 8px;
            width: 246px;
            background-color: #808080;
            color: white;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            transition: 0.3s cubic-bezier(.25,.8,.25,1);
            border-radius: 9px;
            padding: 10px;

          }
        `}
      </style>
      <div className='option'>
        <div className='beerImg'>
          <img src={props.img}></img>
        </div>
        <h2>{props.name}</h2>
        <h4>Brewer: {props.brewer}</h4>
        <p>Price: {props.price}</p>
        <p>ABV: {props.abv}</p>
        <p>Quantity: {props.quantity}</p>
      </div>
    </div>
  );
}

Tap.propTypes = {
  abv: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired
};

export default Tap;
