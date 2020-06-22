import React from "react";
import {FormControl} from "react-bootstrap";

function SearchBar(){
    return <div className="search-group input-group">
    <div className="search-icon input-group-prepend">
      <div className="search-icon input-group-text">
        <i className="search-icon fas fa-search"></i>
      </div>
    </div>
    <FormControl
      id="search-bar-input"
      type="text"
      className="search-form"
      placeholder="Search Course"
    />
    <button id="search-bar-clear-btn"  className="btn btn-default">
      <i className="far fa-times-circle"></i>
    </button>
  </div>;
}

export default SearchBar;