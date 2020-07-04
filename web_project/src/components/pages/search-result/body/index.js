import React from "react";
import Header from "./Header";
import Result from "./Result";



const SearchBody = (props) => {
  console.log(props);
  return (
    <div  className='search-body'>
      <Header data={props.data} searchKeyword={props.searchKeyword} />
      <Result data={props.data} />
    </div>
  );
};

export default SearchBody;

