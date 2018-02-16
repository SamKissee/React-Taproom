import React from 'react';
import PropTypes from 'prop-types';


function EditKeg(props) {

    let _abv = null;
    let _brewer = null;
    let _name = null;
    let _price = null;

    function handleEditKeg(event) {
      event.preventDefault();
      props.passKegEdit({abv: _abv.value, brewer: _brewer.value, img: _img.value, name: _name.value, price: _price.value)});
      alert('You edited ' + _name.value + ' in the Tap Room!');
      _abv.value = '';
      _brewer.value = '';
      _name.value = '';
      _price.value = '';
    }

  return(
    <div>
      <form className='form-group' onSubmit={handleEditKeg}>
        <label>Edit Keg Information</label>
        <input className='form-control' type='text' id='name' placeholder={props.selectedKeg.name}   ref={(input) => {_name = input;}} />
        <input className='form-control' type='text' id='brewer' placeholder={props.selectedKeg.brewer}    ref={(input) => {_brewer = input;}} />
        <input className='form-control' type='text' id='price' placeholder={props.selectedKeg.price}   ref={(input) => {_price = input;}} />
        <input className='form-control' type='text' id='abv' placeholder={props.selectedKeg.abv }   ref={(input) => {_abv = input;}} />
        <button type='submit' className='btn btn-dark'> Done</button>
      </form>
    </div>
  );
}

EditKeg.propTypes = {
  selectedKeg: PropTypes.array,
  passKegEdit: PropTypes.func
};

export default EditKeg;
