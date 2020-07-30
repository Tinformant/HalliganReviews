import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";

import Course from "./evaluations/Course";
import Instructor from "./evaluations/Instructor";
import Comment from "./evaluations/Comment";
import Writer from "./write-review/Writer";

import "./Review.css";

function Reveiw(props) {
  const [key, setKey] = useState("course");

  return (
    <Tab.Container id="rev-tab" activeKey={key} onSelect={(k) => setKey(k)}>
      <Nav variant="none" bg="none" className="rev-nav">
        <Nav.Item className="rev-nav-item">
          <Nav.Link className="rev-nav-link" eventKey="course">
            Course
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="rev-nav-item">
          <Nav.Link className="rev-nav-link" eventKey="instructor">
            Instructor
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="rev-nav-item">
          <Nav.Link className="rev-nav-link" eventKey="comment">
            Comment
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="rev-nav-item write-a-review-nav-item">
          <Writer info={props.data.info} />
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="course">
          <Course data={props.data.course.Data} />
        </Tab.Pane>
        <Tab.Pane eventKey="instructor">
          <Instructor data={props.data.instructor.Data} />
        </Tab.Pane>
        <Tab.Pane eventKey="comment">
          <Comment data={props.data.comments.Data} />
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
}

export default Reveiw;
