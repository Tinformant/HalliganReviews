import React from "react";
import { FormControl } from "react-bootstrap";
import DropDownMenu from "./DropDownMenu";

import "./SearchBar.css";

import dataBase from "../../dataBase";


// const candidate = dataBase.map((x, i) => {
//   var info = x.info;
//   info.id = i
//   return info;
// });

function SearchBar(props) {
  const [searchText, setSearchText] = React.useState("");
  const [visibilityStatus, setVisibilityStatus] = React.useState("hidden");
  const [searchFocus, setSearchFocus] = React.useState("");

  const [searchCandiate, setSearchCandidate] = React.useState([]);

  const [showDropDown, setShowDropDown] = React.useState(false);

  function handleSearchText(event) {
    var value = event.target.value;
    setSearchText(value);
    props.onUpdate((prev) => ({
      ...prev,
      searchKeyword: value,
    }));

    setSearchCandidate(
      dataBase.filter((x) => {
        const keywordList = value.toLowerCase().split(" ");
        // keywordList = keywordList.filter((x)=> x!==" ");
        const keyword = new RegExp(keywordList.join(".*"));
        const info = x.info;
        return (info.department + info.num + info.title).toLowerCase().match(keyword);
      })
    );
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
      props.onUpdate((prev) =>({
        ...prev, 
        isSearch: true,
        searchKeyword: searchText,
        data: searchCandiate
      }));
      setSearchText("");
    }
  };

  return (
    <div className='search-wrap'>
      <div
        className='search-group input-group'
        style={
          showDropDown
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
          onFocus={(e) => {setSearchFocus(true);setShowDropDown(true)}}
          onBlur={() => setSearchFocus(false)}
          id='search-bar'
          type='text'
          placeholder='Search'
          autoComplete='off'
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
      {showDropDown && <DropDownMenu searchText={searchText} candidate={searchCandiate} onUpdate={props.onUpdate} setShowDropDown={setShowDropDown}/>}
      {/* {searchText && searchFocus && <DropDownMenu searchText={searchText} candidate={searchCandiate} onUpdate={props.onUpdate}/>} */}
    </div>
  );
}

export default SearchBar;
