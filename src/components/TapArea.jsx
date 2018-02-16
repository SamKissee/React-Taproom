import React from 'react';
import Tap from './Tap';
import Staff from './Staff';
import Filter from './Filter';
import PropTypes from 'prop-types';


function TapArea(props){
  let tapList = props.kegList

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
        {tapList.map((tap, index) =>
          <Tap
            name={tap.name}
            abv={tap.abv}
            price={tap.price}
            brewer={tap.brewer}
            img={tap.img}
            quantity={tap.quantity}
            key={index}/>
        )}
      </div>

    </div>
  );
}
TapArea.propTypes = {
  kegList: PropTypes.array
};

export default TapArea;
