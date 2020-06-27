import React from "react";
import { FormControl } from "react-bootstrap";
import DropDownMenu from "./DropDownMenu";

import "./NavigationBar.css";




const candidate = [
    {department: "COMP", num:"0160", title:"Algorithm"},
    {department: "COMP", num:"0125", title:"Numerical Analysis"},
    {department: "COMP", num:"0119", title:"Big Data"},
    {department: "COMP", num:"0133", title:"Human Robot Interaction"},
    {department: "COMP", num:"0138", title:"Reinforcement Learning"},
    {department: "COMP", num:"0135", title:"Introduction to Machine Learning"},
];


function SearchBar(props) {
  const [searchText, setSearchText] = React.useState("");
  const [visibilityStatus, setVisibilityStatus] = React.useState("hidden");
  const [searchFocus, setSearchFocus] = React.useState("");

  const [searchCandiate, setSearchCandidate] = React.useState([]);

  function handleSearchText(event) {
    var value = event.target.value;
    setSearchText(value);
    
    setSearchCandidate(candidate.filter((x)=>{
      const keywordList = value.toLowerCase().split(" ");
      // keywordList = keywordList.filter((x)=> x!==" ");
      const keyword = new RegExp(keywordList.join('.*'));
      return (x.department+x.num+x.title).toLowerCase().match(keyword);
    }))
    setVisibilityStatus(value.length > 0 ? "visible" : "hidden");
  }

  function clearContent(event) {
    setSearchText("");
    setVisibilityStatus("hidden");
    document.getElementById("search-bar").focus();
  }
 
  const handleSearchSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      props.onUpdate(searchText);
      setSearchText("");
    }
  };


  return (
    <div className='search-wrap'>
      <div
        className='search-group input-group'
        style={
          searchText && searchFocus
            ? {
                borderRadius: "19px 19px 0 0",
                borderBottom:'none'
              }
            : {}
        }>
        <div className='search-icon input-group-prepend'>
          <div className='search-icon input-group-text'>
            <i className='search-icon fas fa-search'></i>
          </div>
        </div>
        <FormControl
          onChange={handleSearchText}
          onKeyPress={handleSearchSubmit}
          onFocus={() => setSearchFocus(true)}
          onBlur={() => setSearchFocus(false)}
          id='search-bar'
          type='text'
          placeholder='Search'
          className='search-form'
          value={searchText}
        />
        <button
          onClick={clearContent}
          id='search-bar-clear-btn'
          className='btn btn-default'
          style={{ visibility: [visibilityStatus] }}>
          <i className='far fa-times-circle'></i>
        </button>
        {/* <Button variant="outline-success">Search</Button> */}
      </div>
      {searchText && searchFocus && <DropDownMenu searchText={searchText} candidate={searchCandiate}/>}
    </div>
  );
}

export default SearchBar;
