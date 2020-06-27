
import React from "react";
import ReviwBody from "./review-body";
// import Header from "./header/Header";
// import Review from "./Review";

// import SearchBody from "./search-body/SearchResult";

import "./styles.css";

function MainBody(props) {
  return <div className="main-body">
      <ReviwBody data={props.data}/> 
  </div>;
}

export default MainBody;

