import React from 'react';
import Tap from './Tap';
import Staff from './Staff';
import Filter from './Filter';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function TapArea(props){


  return (
    <div>
      <style jsx>
        {`
          .tapArea{
            width: 90%;
            margin: 10px auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
        `}
      </style>
      <Filter/>
      <div className='tapArea'>
        {props.kegList.map((tap) =>
          <Tap
            name={tap.name}
            abv={tap.abv}
            price={tap.price}
            brewer={tap.brewer}
            img={tap.img}
            quantity={tap.quantity}
            key={v4()}
            onKegSelect={props.onKegSelect}
          />
        )}
      </div>

    </div>
  );
}
TapArea.propTypes = {
  kegList: PropTypes.array,
  onKegSelect: PropTypes.func
};

export default TapArea;
