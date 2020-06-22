import React from "react";
import Header from "./header/Header";
import Review from "./Review";



function MainBody(props) {
  return <div className="main-body">
      {/* <Header data={props.data}/> */}
      <Review data={props.data}/>
  </div>;
}

export default MainBody;

