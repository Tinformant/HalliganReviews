import React from "react";
import { FormControl } from "react-bootstrap";
import "./NavigationBar.css";

function SearchBar() {
  const [searchText, setSearchText] = React.useState("");
  const [visibilityStatus, setVisibilityStatus] = React.useState("hidden");

  function handleSearchText(event) {
    var value = event.target.value;
    setSearchText(value);
    setVisibilityStatus(value.length > 0 ? "visible" : "hidden");
  }

  function clearContent(event) {
    setSearchText("");
    setVisibilityStatus("hidden");
    document.getElementById("search-bar").focus();
  }

  return (
    <div className="search-group input-group">
      <div className="search-icon input-group-prepend">
        <div className="search-icon input-group-text">
          <i className="search-icon fas fa-search"></i>
        </div>
      </div>
      <FormControl
        onChange={handleSearchText}
        id="search-bar"
        type="text"
        placeholder="Search"
        className="search-form"
        value={searchText}
      />
      <button
        onClick={clearContent}
        id="search-bar-clear-btn"
        className="btn btn-default"
        style={{ visibility: [visibilityStatus] }}
      >
        <i className="far fa-times-circle"></i>
      </button>
      {/* <Button variant="outline-success">Search</Button> */}
    </div>
  );
}

export default SearchBar;
