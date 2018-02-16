import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function AddKeg(props) {
  let _abv = null;
  let _brewer = null;
  let _img = null;
  let _name = null;
  let _price = null;
  let _quantity = null;

  function handleNewKeg(event) {
    event.preventDefault();
    props.passKegCreation({abv: _abv.value, brewer: _brewer.value, img: _img.value, name: _name.value, price: _price.value, quantity: 124, id: v4()});
    alert('You added ' + _name.value + ' to the Tap Room!');
    _abv.value = '';
    _brewer.value = '';
    _name.value = '';
    _price.value = '';
  }

  return(
    <div>
      <style global jsx>
        {`
          .form-group{
            color: white;
            width: 30%;
            margin: 0px auto;
          }
          .form-group label{
            display: flex;
            flex-direction: column ;
          }
          .btn{
            padding: 10px;
            margin: 3px;
            border: none;
            border-radius: 5px;
            color: white;
            background: grey;
          }
        `}
      </style>
      <form className="form-group" onSubmit={handleNewKeg}>
        <label>New Kegs
          <input className="form-control" type="text" id='name' placeholder="Beer Name"   ref={(input) => {_name = input;}} />
          <input className="form-control" type="text" id="brewer" placeholder="Brewery"   ref={(input) => {_brewer = input;}} />
          <input className="form-control" type="text" id="price" placeholder="Price"   ref={(input) => {_price = input;}} />
          <input className="form-control" type="text" id="abv" placeholder="ABV"   ref={(input) => {_abv = input;}} />
          <input className="form-control" id="img" placeholder="IMG"   ref={(input) => {_img = input;}} />
          {/* <select className="form-control" id="img" placeholder="Image"  ref={(input) => {_img = input;}}>
            <option value='hub' >Hub</option>
            <option value='laurelwood'>Laurelwood</option>
            <option value='lostcoast'>Lost Coast</option>
            <option value='motherearth'>Mother Earth</option>
            <option value='newbelgium'>New Belgium</option>
            <option value='pfriem'>Pfriem</option>
            <option value='stone'>Stone</option>
          </select> */}
          <button type='submit' className="btn btn-dark" >Add New Keg</button>
        </label>
      </form>

    </div>
  );
}

AddKeg.propTypes = {
  passKegCreation: PropTypes.func
};

export default AddKeg;
