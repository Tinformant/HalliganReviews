import React from "react";
import ReviwBody from "./review-body";
import SearchBody from "./search-body";

import "./styles.css";
// import dataBase from "../../dataBase";


function MainBody(props) {
  return (
    <div className='main-body' >
      {props.isSearch ? (
        <SearchBody data={props.data} searchKeyword={props.searchKeyword}/>
      ) : (
        <ReviwBody data={props.data} />
      )}
    </div>
  );
}

export default MainBody;
