import React from "react";
import { Row, Col } from "react-bootstrap";
import ComboBox from "../ComboBox";
import "./SelectBox.css";

function SelectBox(props) {
  return (
    <form className="review-header-form">
      <Row className="review-header-form-row" noGutters={true}>
        <Col className="review-header-form-col to-left">
          <ComboBox
            btnStyle="btn-style"
            defaultValue={props.data.info.semester[0]}
            availableOption={props.data.info.semester}
            search="false"
          />
        </Col>
        <Col className="review-header-form-col to-center">
          <Col className="review-header-form-col to-left">
            <ComboBox
              btnStyle="btn-style"
              defaultValue={props.data.info.year[0]}
              availableOption={props.data.info.year}
              search="false"
            />
          </Col>
        </Col>
        <Col className="review-header-form-col to-right">
          <Col className="review-header-form-col to-left">
            <ComboBox
              btnStyle="btn-style"
              defaultValue={props.data.info.instructor[0]}
              availableOption={props.data.info.instructor}
              search="true"
            />
          </Col>
        </Col>
      </Row>
    </form>
  );
}

export default SelectBox;
