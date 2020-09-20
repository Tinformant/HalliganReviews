import React from "react";
import "./QuerySheet.css";
import { Form, Row, Col } from "react-bootstrap";

function WriteComment(props) {
  const status = [
    "--- Please Choose ---",
    "Undergraduate Student",
    "Graduate Student",
    "Prefer not to say",
    "Other",
  ];
  return (
    <Form>
      <div className="div-form">
        <Form.Label className="form-label">
          Do you have any comments?
        </Form.Label>
        <Form.Control
          as="textarea"
          className="form-field"
          rows="5"
          placeholder="Write something..."
          value={props.comment}
          onChange={event => {props.setComment(event.target.value)}}
        ></Form.Control>
      </div>
      <Row className="form-row">
        <Col className="form-group">
          <Form.Check
            size="sm"
            label="Anonymous"
            onChange={(event) => {
              // console.log("clicked");
              // // console.log(event.target.checked);
              props.setAnonymous(event.target.checked);
            }}
          />
        </Col>
        <Col>
          <Row noGutters="true">
            <Form.Label column="sm" lg={4}>
              Your student identity
            </Form.Label>
            <Col className="form-group">
              <Form.Control
                required
                size="sm"
                as="select"
                value={props.status}
                className="form-field"
                onChange={(event) => props.setStatus(event.target.value)}
              >
                {status.map((value, index) => (
                  <option key={index}>{value}</option>
                ))}
              </Form.Control>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
}

export default WriteComment;
