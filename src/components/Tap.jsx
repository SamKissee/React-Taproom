import React from 'react';
import PropTypes from 'prop-types';

function Tap(props){

  function removePint(){
    let quantity = parseInt(props.quantity);
  }
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
          button{
            padding: 10px;
            margin: 3px;
            border: none;
            border-radius: 5px;
          }
          .buy{
            color: white;
            background: teal;
          }
          .edit{
            color: white;
            background: red;
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
        <div>
          <button onClick={removePint} className='buy'>Pint</button>
          <button className='buy'>32oz</button>
          <button className='buy'>64oz</button>
          <button onClick={() => {props.onKegSelect({name: props.name, brewer: props.brewer, abv: props.abv, price: props.price});}} className='edit'>Edit Keg</button>
        </div>
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
  quantity: PropTypes.string.isRequired,
  onKegSelect: PropTypes.func

};

export default Tap;
