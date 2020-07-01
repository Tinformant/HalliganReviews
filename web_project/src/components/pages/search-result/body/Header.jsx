import React from "react";

import "./Header.css";

const Header = (props) => {
  console.log(props);
  return (
    props.data ? <div className='search-body-header'>
      <p>Found {props.data.length} items for keyword "{props.searchKeyword}"</p>
      <p>filtering</p>
    </div>
    : 
    <div className='search-body-header'>
      <p>No results found</p>
    </div>
  );
};

export default Header;

