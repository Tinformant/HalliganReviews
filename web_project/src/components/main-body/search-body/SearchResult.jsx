import React from "react";

const SearchResultHeader = (props) => {
    console.log(props);
    return (
        <div className="search-result-header">
            <p>Found 4 items for keyword asdf</p>
        </div>
    );
};

const SearchResultItem = (props) => {
    console.log(props);
    return (
        <div className="search-result-item">
            <p className="search-result-link"> this is rendered to be the course title </p>
            <p className="search-result-content">some detailed description about the course</p>
        </div>
    );
}

const SearchResult = (props) => {
    console.log(props);
    
    return(
        <SearchResultHeader keyword={props.keyword}/>

    );
};


export default SearchResult;



