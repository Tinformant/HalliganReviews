import React from "react";
import { FormControl } from "react-bootstrap";
import { useHistory } from "react-router-dom";


import DropDownMenu from "./DropDownMenu";

import "./SearchBar.css";

import serverBackEnd from "../../fakeBackEnd";


export default function SearchBar(props) {
  const [attributes, setAttributes] = React.useState({
    queryStr: "",
    showDropDown: false,
    showCancelButton: "hidden",
  });

  const [searchCandidate, setSearchCandidate] = React.useState([]);

  function handleSearchText(event) {
    var value = event.target.value;
    setAttributes((prev) => ({
      ...prev,
      queryStr: value,
      showDropDown: value.length > 0 ? true : false,
      showCancelButton: value.length > 0 ? "visible" : "hidden",
    }));

    const response = {};
    const cmdSearch = {
      type: "search",
      query: { queryString: value, order: "relevant" },
    };

    serverBackEnd.get(cmdSearch, response);


    setSearchCandidate(response.result);
  }

  function clearContent(event) {
    setAttributes((prev) => ({
      ...prev,
      queryStr: "",
      showCancelButton: "hidden",
    }));

    document.getElementById("search-bar").focus();
  }

  const history = useHistory();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      let path = `/search/${attributes.queryStr}`; 
      history.push(path);
      
      setAttributes((prev) => ({
        ...prev,
        queryStr: "",
        showCancelButton: "hidden",
        showDropDown: false,
      }));
      document.getElementById("search-bar").blur();
    }
  };

  const escFunction = React.useCallback((event) => {
    if (event.keyCode === 27) {
      setAttributes((prev) => ({
        ...prev,
        showDropDown: false,
      }));
      document.getElementById("search-bar").blur();
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  return (
    <div className='search-wrap'>
      <div
        className='search-group input-group'
        style={
          attributes.showDropDown
            ? {
                borderRadius: "19px 19px 0 0",
                borderBottom: "none",
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
          value={attributes.queryStr}
          onKeyPress={handleKeyPress}
          onFocus={(e) => {
            attributes.queryStr &&
              setAttributes((prev) => ({
                ...prev,
                showDropDown: true,
              }));
          }}
          id='search-bar'
          type='text'
          placeholder='Search'
          autoComplete='off'
          className='search-form'
        />
        <button
          onClick={clearContent}
          id='search-bar-clear-btn'
          className='btn btn-default'
          style={{ visibility: [attributes.showCancelButton] }}>
          <i className='far fa-times-circle'></i>
        </button>
      </div>
      {attributes.showDropDown && (
        <DropDownMenu
          candidate={searchCandidate}
          onUpdate={props.onUpdate}
          attributes={attributes}
          setAttributes={setAttributes}
        />
      )}
    </div>
  );
}
