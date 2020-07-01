import React from "react";
import background from "./picture/background.jpg";
import jumboPic from "./picture/jumbo.jpeg";
import "./body.css";
import { Row, Col, Image } from "react-bootstrap";

function Section() {
  return (
    <div>
      <Row noGutters className="section-row">
        <Col lg={6} className="fill">
          <Image
            src={jumboPic}
            alt="jumboPic"
            // className="picture-right"
            fluid
          />
        </Col>
        <Col lg={6} className="intro-col">
          <div className="intro-div">
            <h1 className="intro-title">
              Hear what others say about your ideal course
            </h1>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Section;
