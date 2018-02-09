import React from 'react';
import AddKeg from './AddKeg';
import EditKeg from './EditKeg';

function Staff() {
  return(
    <div className="staff">
      <h1 style={{textAlign: 'center', color: 'white'}}>Employees Only</h1>
      <AddKeg/>
      <EditKeg/>
    </div>
  )
};

export default Staff;
