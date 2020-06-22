import React from "react";
import CourseInfo from "./CourseInfo";
import "./Header.css";
import SelectBox from "./SelectBox";

function Header(props) {
  return (
    <div id="review-header">
      <CourseInfo data={props.data}/>
      <SelectBox data={props.data}/>
    </div>
  );
}

export default Header;
