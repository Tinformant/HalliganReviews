import React from "react";
import "./QuerySheet.css";
import { Form, Col, Row } from "react-bootstrap";

// function range(start, end) {
//   var ans = [];
//   ans.push("--- Year ---");
//   for (let i = end; i >= start; i--) {
//     ans.push(i);
//   }
//   return ans;
// }

// function generateOption(value, index) {
//   return <option key={index}>{value}</option>;
// }

function BasicInfo(props) {
  // const date = new Date();
  // const currentYear = date.getFullYear();
  // const yearLength = 5;
  // const yearRange = range(currentYear - yearLength, currentYear);
  // const semesters = ["--- Semester ---", "Spring", "Summer", "Fall"];

  return (
    <Form>
      <div>
        <Form.Label className="form-question">
          When did you take the course {props.department}{props.courseNumber}-
          {props.subNumber} {props.courseName}?
        </Form.Label>
      </div>
      <Row className="form-row">
        <Col controlid="year" className="form-group">
          <Form.Control
            type="text"
            className="form-field"
            placeholder={props.year}
            readOnly
          />
        </Col>

        <Col controlid="semester" className="form-group">
          <Form.Control
            type="text"
            className="form-field"
            placeholder={props.semester}
            readOnly
          />
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
            onChange={(event) => props.setAssessment(event.target.value)}
          />
        </Col>
      </Row>
    </Form>
  );
}

export default BasicInfo;
