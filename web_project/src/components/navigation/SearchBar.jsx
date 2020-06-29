import React from "react";
import { FormControl } from "react-bootstrap";
import DropDownMenu from "./DropDownMenu";

import "./SearchBar.css";

import dataBase from "../../dataBase";

const getResultFromDB = (queryStr) => {
  return dataBase.filter((x) => {
    const keywordList = queryStr.toLowerCase().split(" ");
    const keyword = new RegExp(keywordList.join("[A-za-z0–9_]*"));
    const info = x.info;
    return (info.department + info.number + info.title)
      .toLowerCase()
      .match(keyword);
  });
};

function SearchBar(props) {
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
    setSearchCandidate(getResultFromDB(value));
  }

  function clearContent(event) {
    setAttributes((prev) => ({
      ...prev,
      queryStr: "",
      showCancelButton: "hidden",
    }));

    document.getElementById("search-bar").focus();
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      props.onUpdate((prev) => ({
        ...prev,
        isSearch: true,
        searchKeyword: attributes.queryStr,
        data: searchCandidate,
      }));
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

export default SearchBar;
