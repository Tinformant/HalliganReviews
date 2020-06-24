import React from "react";
import "./CourseInfo.css";

function CourseInfo(props) {
  return (
    <div id="course-info">
      <h1 className="course-name">
        <span id="Department">{props.data.info.department}</span>
        <span id="Course-Number">{props.data.info.number}</span>-
        <span id="Course-Sub-Number">{props.data.info.subnumber}</span>
        <span> </span>
        <span id="Course-Name">{props.data.info.title}</span>
      </h1>
    </div>
  );
}

export default CourseInfo;
