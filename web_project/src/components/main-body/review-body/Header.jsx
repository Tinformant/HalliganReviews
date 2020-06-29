import React from "react";
import { Row, Col } from "react-bootstrap";
import ComboBox from "../../ComboBox";

import "./Header.css";

function SelectBox(props) {
  return (
    <form className="review-header-form">
      <Row className="review-header-form-row" noGutters={true}>
        <Col className="to-left">
          <ComboBox
            aligned="to-left"
            defaultValue={props.data.info.semester[0]}
            availableOption={props.data.info.semester}
            itemName="Semester"
          />
        </Col>
        <Col className="to-center">
          <ComboBox
            aligned="to-center"
            defaultValue={props.data.info.year[0]}
            availableOption={props.data.info.year}
            itemName="Year"
          />
        </Col>
        <Col className="to-right">
          <ComboBox
            aligned="to-right"
            defaultValue={props.data.info.instructor[0]}
            availableOption={props.data.info.instructor}
            itemName="Instructor"
          />
        </Col>
      </Row>
    </form>
  );
}

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

function Header(props) {
  return (
    <div id="review-header">
      <CourseInfo data={props.data} />
      <SelectBox data={props.data} />
    </div>
  );
}

export default Header;
