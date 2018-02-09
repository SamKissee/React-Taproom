import React from 'react';
import AddKeg from './AddKeg';
import EditKeg from './EditKeg';

function Staff() {
  return(
    <div>
      <h1 style={{textAlign: 'center', color: 'white'}}>Staff Only</h1>
      <AddKeg/>
      <EditKeg/>
    </div>
  )
};

export default Staff;
