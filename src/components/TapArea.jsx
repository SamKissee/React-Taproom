import React from 'react';
import Tap from './Tap';


function TapArea(){
  let tapList = [
    {
      'abv' : '5',
      'brewer' : 'Mother Earth',
      'img' : 'motherearth',
      'name' : 'Cali Creamin',
      'price' : 'purple',
      'quantity' : '124'
    },
    {
      'abv' : '8',
      'brewer' : 'Mother Earth',
      'img' : 'motherearth',
      'name' : 'Sintax',
      'price' : 'red',
      'quantity' : '124'
    },
    {
      'abv' : '6',
      'brewer' : 'Laurelwood',
      'img' : 'laurelwood',
      'name' : 'Free Range Red',
      'price' : 'green',
      'quantity' : '124'
    },
    {
      'abv' : '6.5',
      'brewer' : 'Stone',
      'img' : 'stone',
      'name' : 'Stone IPA',
      'price' : 'red',
      'quantity' : '124'
    },
    {
      'abv' : '4.5',
      'brewer' : 'New Belgium',
      'img' : 'newbelgium',
      'name' : 'Fat Tire',
      'price' : 'purple',
      'quantity' : '124'
    }
  ];

  return (
    <div>
      <h1>Homes</h1>
      <div style={{display: 'flex', flexWrap: 'wrap', margin: '10px'}}>
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

export default TapArea;
