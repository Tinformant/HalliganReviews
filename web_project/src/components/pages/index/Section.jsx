import React from "react";
import background from "./picture/background.jpg";
import jumboPic from "./picture/jumbo.jpeg";
import "./body.css";
import { Row, Col, Image } from "react-bootstrap";

function Section() {
  return (
    <div>
      <Row noGutters className="section-one">
        <Col lg={6} className="col-one">
          <div className="intro-div">
            <h1 className="intro-title">
              Hear what others say about your ideal course
            </h1>
          </div>
        </Col>
        <Col lg={6}>
          <Image src={background} alt="pic1" className="pic-one" />
        </Col>
      </Row>

      <Row noGutters className="section-two">
        <Col lg={6}>
          <Image src={jumboPic} alt="background" className="pic-two" />
        </Col>
        <Col lg={6} className="col-two">
          <div className="intro-div">
            <h1 className="intro-title">
              Share your insights about your favorite courses
            </h1>
          </div>
        </Col>
      </Row>
      <div className="call-for-action" align="center">
          <button className="action-btn">Start Your Journey Now</button>
      </div>
      <div className="footer-div">
          <p className="copyright">All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Section;
