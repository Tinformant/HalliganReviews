import React from "react";
import "./QuerySheet.css";
import { Form, Col, Row } from "react-bootstrap";

function range(start, end) {
  var ans = [];
  ans.push("--- Year ---");
  for (let i = end; i >= start; i--) {
    ans.push(i);
  }
  return ans;
}

function generateOption(value, index) {
  return <option key={index}>{value}</option>;
}

function BasicInfo(props) {
  const date = new Date();
  const currentYear = date.getFullYear();
  const yearLength = 5;
  const yearRange = range(currentYear - yearLength, currentYear);
  const semesters = ["--- Semester ---", "Spring", "Summer", "Fall"];

  return (
    <Form>
      <div>
        <Form.Label className="form-question">
          When did you take the course?
        </Form.Label>
      </div>
      <Row className="form-row">
        <Col controlid="year" className="form-group">
          <Form.Control
            required
            as="select"
            value={props.year}
            className="form-field"
            onChange={(event) => props.setYear(event.target.value)}
          >
            {yearRange.map(generateOption)}
          </Form.Control>
        </Col>

        <Col controlid="semester" className="form-group">
          <Form.Control
            required
            as="select"
            value={props.semester}
            className="form-field"
            onChange={(event) => props.setSemester(event.target.value)}
          >
            {semesters.map(generateOption)}
          </Form.Control>
        </Col>
      </Row>
      <Row className="form-row">
        <Col controlid="instructor" className="form-group">
          <Form.Label>Your instructor</Form.Label>
          <Form.Control
            type="text"
            className="form-field"
            placeholder={props.instructor}
            readOnly
          />
        </Col>
      </Row>
      <Row className="form-row">
        <Col controlid="assessment" className="form-group">
          <Form.Label>Assessment Methods</Form.Label>
          <Form.Control
            type="text"
            className="form-field"
            placeholder="e.g. 3 assignments + 4 quizzes + 2 tests"
            value={props.assessment}
            onChange={(event) => (props.setAssessment(event.target.value))}
          />
        </Col>
      </Row>
    </Form>
  );
}

export default BasicInfo;
