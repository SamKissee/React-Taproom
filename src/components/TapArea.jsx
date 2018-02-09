import React from 'react';
import Tap from './Tap';
import Staff from './Staff';

function TapArea(){
  let tapList = [
    {
      'abv' : '5',
      'brewer' : 'Mother Earth',
      'img' : 'http://bit.ly/2BR8XXX',
      'name' : 'Cali Creamin',
      'price' : 'purple',
      'quantity' : '124'
    },
    {
      'abv' : '8',
      'brewer' : 'Mother Earth',
      'img' : 'http://bit.ly/2BR8XXX',
      'name' : 'Sintax',
      'price' : 'red',
      'quantity' : '124'
    },
    {
      'abv' : '6',
      'brewer' : 'Laurelwood',
      'img' : 'http://bit.ly/2EPIk45',
      'name' : 'Free Range Red',
      'price' : 'green',
      'quantity' : '124'
    },
    {
      'abv' : '6.5',
      'brewer' : 'Stone',
      'img' : 'http://bit.ly/2EezhwB',
      'name' : 'Stone IPA',
      'price' : 'red',
      'quantity' : '124'
    },
    {
      'abv' : '4.5',
      'brewer' : 'New Belgium',
      'img' : 'http://bit.ly/2EgcEYL',
      'name' : 'Fat Tire',
      'price' : 'purple',
      'quantity' : '124'
    }
  ];

  return (
    <div>
      <style jsx>
        {`
          .tapArea{
            width: 90%;
            margin: 10px auto;
            display: flex;
            flex-wrap: wrap;
          }
        `}
      </style>
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
      <Staff/>
    </div>
  );
}

export default TapArea;
