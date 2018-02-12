import React from 'react';


function AddKeg() {
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
      <div className="form-group">
        <label>New Kegs
          <input className="form-control" type="text"  placeholder="Beer Name" />
          <input className="form-control" type="text" name="brewer" placeholder="Brewery" />
          <input className="form-control" type="text" name="price" placeholder="Price" />
          <input className="form-control" type="text" name="abv" placeholder="ABV" />
          <input className="form-control" type="text" name="img" placeholder="Image"/>
          <button className="btn btn-dark" >Add New Keg</button>
        </label>
      </div>

    </div>
  );
}

export default AddKeg;
