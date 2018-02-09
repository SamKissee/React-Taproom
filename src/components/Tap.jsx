import React from 'react';
import PropTypes from 'prop-types';

function Tap(props){
  return (
    <div>
      <style jsx>
        {`
          img {
            height: auto;
            width: 100%;
            border-radius: 3px;
          }
          h4{
            margin: 0px;
            color: lightblue;
          }
          h3{
            margin: 5px 0px;
          }
          p {
            margin: 5px 0px;
            font-weight: 300;
          }
          .option{
            margin: 10px 8px 0px 8px;
            width: 246px;

          }
        `}
      </style>
      <div className='option'>
        <img src={props.img}></img>
        <h3>{props.name}</h3>
        <h4>{props.brewer}</h4>
        <p>{props.price}</p>
        <p>{props.abv}</p>
        <p>{props.quantity}</p>
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
