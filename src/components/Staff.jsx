import React from 'react';
import AddKeg from './AddKeg';
import EditKeg from './EditKeg';
import PropTypes from 'prop-types';

function Staff(props) {
  return(
    <div className="staff">
      <h1 style={{textAlign: 'center', color: 'white'}}>Employees Only</h1>
      <AddKeg passKegCreation={props.onNewKegCreation}/>
      <EditKeg/>
    </div>
  );
}

Staff.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default Staff;
