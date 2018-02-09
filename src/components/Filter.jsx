import React from 'react';


function Filter() {
  return (
    <div>
      <form id="search-input">
        <div class="form-group">
          <label>Search for your favorite <strong>BEER!</strong></label>
          <input name="term" class="form-control" type="text" placeholder="Search">
          <label>Search for your favorite <strong>Brewery!</strong></label>
          <input name="brew" class="form-control" type="text" placeholder="Search">
        </div>
      </form>
    </div>
  )
}

export default Filter;
