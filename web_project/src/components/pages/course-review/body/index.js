import React from "react";

import Header from "./Header";
import Review from "./Review";

const ReveiwBody = (props) => {
return <div className="review-body">
      <Header data={props.data}/>
      <Review data={props.data}/>
  </div>;
}

export default ReveiwBody;
