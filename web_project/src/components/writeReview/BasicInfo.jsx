import React from "react";
import ComboBox from "../ComboBox";
import "./QuerySheet.css";
import { Form, Col, Row } from "react-bootstrap";
import StarRating from "./StarRating";

function range(start, end) {
  var ans = [];
  ans.push("--- Please select ---");
  for (let i = end; i >= start; i--) {
    ans.push(i);
  }
  return ans;
}

function generateOption(value, index) {
  return <option key={index}>{value}</option>;
}

function BasicInfo() {
  const [value, setValue] = React.useState("");
  const date = new Date();
  const currentYear = date.getFullYear();
  const yearLength = 5;
  const yearRange = range(currentYear - yearLength, currentYear);
  const semester = ["--- Please select ---","Spring", "Summer", "Fall"];

  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="year" className="form-group">
          <Form.Label>In which year did you take the course?</Form.Label>
          <Form.Control as="select" value={value} className="form-field" onChange={event => setValue(event.target.value)}>
              {yearRange.map(generateOption)}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="semester" className="form-group">
          <Form.Label>In which semester did you take the course?</Form.Label>
          <Form.Control
            as="select"
            value="Choose semester..."
            className="form-field"
          >
            {semester.map(generateOption)}
          </Form.Control>
        </Form.Group>
      </Form.Row>
    </Form>
  );
}

export default BasicInfo;
