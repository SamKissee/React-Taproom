import React from 'react';


function Filter() {
  return (
    <div>
      <style jsx>
        {`
          .form-group{
            display: flex;
            flex-direction: column;
            width: 60%;
            margin: 0px auto;
          }
          label, input {
            margin: 5px 0px;
          }
        `}
      </style>
      <form id="search-input">
        <div className="form-group">
          <label>Search for your favorite <strong>BEER!</strong></label>
          <input name="term" className="form-control" type="text" placeholder="Search"/>
          <label>Search for your favorite <strong>Brewery!</strong></label>
          <input name="brew" className="form-control" type="text" placeholder="Search"/>
        </div>
      </form>
    </div>
  );
}

export default Filter;
