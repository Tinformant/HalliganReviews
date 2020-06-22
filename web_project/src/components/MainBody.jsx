import React from "react";
import Header from "./Header";
import Review from "./Review";

import data from "../data.js";

function MainBody() {
  return <div className="main-body">
      <Header />
      <Review data={data}/>
  </div>;
}

export default MainBody;

