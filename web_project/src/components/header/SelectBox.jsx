import React from "react";
import { Row, Col } from "react-bootstrap";

import "./SelectBox.css";

function setOperation(value,index) {
  return <option key={index} className="option-color">{value}</option>;
}

function SelectBox(props) {
  return (
    <form className="review-header-form">
      <Row className="review-header-form-row" noGutters={true}>
        <Col className="review-header-form-col to-left">
          <select
            className="selectpicker show-tick"
            data-style="btn-style"
            data-live-search="true"
            data-actions-box="true"
            title="Semester"
            defaultValue={props.data.info.semester[0]}
          >
            {props.data.info.semester.map(setOperation)}
          </select>
        </Col>
        <Col className="review-header-form-col to-center">
          <select
            className="selectpicker show-tick"
            data-style="btn-style"
            data-live-search="true"
            data-actions-box="true"
            title="Year"
            defaultValue={props.data.info.year[0]}
          >
            {props.data.info.year.map(setOperation)}
          </select>
        </Col>
        <Col className="review-header-form-col to-right">
          <select
            className="selectpicker show-tick"
            data-style="btn-style"
            data-live-search="true"
            data-actions-box="true"
            title="Instructor"
            defaultValue={props.data.info.instructor[0]}
          >
            {props.data.info.instructor.map(setOperation)}{" "}
          </select>
        </Col>
      </Row>
    </form>
  );
}

export default SelectBox;
