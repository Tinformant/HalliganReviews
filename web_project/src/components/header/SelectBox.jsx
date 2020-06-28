import React from "react";
import { Row, Col } from "react-bootstrap";
import ComboBox from "../ComboBox";
import "./SelectBox.css";

function SelectBox(props) {
  return (
    <form className="review-header-form">
      <Row className="review-header-form-row" noGutters={true}>
        <Col className="to-left">
          <ComboBox
            defaultValue={props.data.info.semester[0]}
            availableOption={props.data.info.semester}
            search='false'
            placehoder='Semester'
          />
        </Col>
        <Col className="to-center">
            <ComboBox
              defaultValue={props.data.info.year[0]}
              availableOption={props.data.info.year}
              search="false"
              placehoder='Year'
            />
        </Col>
        <Col className="to-right">
            <ComboBox
              defaultValue={props.data.info.instructor[0]}
              availableOption={props.data.info.instructor}
              search="true"
              placehoder='Instructor'
            />
        </Col>
      </Row>
    </form>
  );
}

export default SelectBox;
