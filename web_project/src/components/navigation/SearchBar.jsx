import React from "react";
import { FormControl } from "react-bootstrap";
import { useHistory } from "react-router-dom";


import DropDownMenu from "./DropDownMenu";

import "./SearchBar.css";

// import serverBackEnd from "../../fakeBackEnd";


export default function SearchBar(props) {
  const [attributes, setAttributes] = React.useState({
    queryStr: "",
    showDropDown: false,
    showCancelButton: "hidden",
  });

  const [searchCandidate, setSearchCandidate] = React.useState([]);

  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  // const [data, setData] = React.useState([]);
  
  console.log("Search dropdown message: error", error);
  console.log("Search dropdown message: isLoad", isLoaded);

  React.useEffect(() => {
    if (attributes.queryStr) 
    fetch(`/courses/${attributes.queryStr}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          // setData(result.result);
          setSearchCandidate(result.result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [attributes.queryStr]);

  function handleSearchText(event) {
    var value = event.target.value;
    setAttributes((prev) => ({
      ...prev,
      queryStr: value,
      showDropDown: value.length > 0 ? true : false,
      showCancelButton: value.length > 0 ? "visible" : "hidden",
    }));

    // const cmdSearch = {
    //   type: "search",
    //   query: { queryString: value, order: "relevant" },
    // };

    // const response = {};
    // serverBackEnd.get(cmdSearch, response);
  }

  function clearContent(event) {
    document.getElementById("search-bar").focus();
    setAttributes((prev) => ({
      ...prev,
      queryStr: "",
      showCancelButton: "hidden",
      showDropDown: false,
    }));
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
