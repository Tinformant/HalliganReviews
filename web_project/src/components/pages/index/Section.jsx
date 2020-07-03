import React from "react";
import background from "./picture/background.jpg";
import jumboPic from "./picture/jumbo.jpeg";
import "./body.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import { Row, Col, Image } from "react-bootstrap";

function Section() {
  return (
    <div>
      <Row noGutters className="section-one">
        <Col lg={6} className="col-one">
          <div className="intro-div">
            <ScrollAnimation animateIn="fadeInLeft">
              <h1 className="intro-title">
                Hear what others say about your ideal course
              </h1>
            </ScrollAnimation>
          </div>
        </Col>
        <Col lg={6}>
          <ScrollAnimation animateIn="fadeInUp">
            <Image src={background} alt="pic1" className="pic-one" />
          </ScrollAnimation>
        </Col>
      </Row>

      <Row noGutters className="section-two">
        <Col lg={6}>
          <ScrollAnimation animateIn="animate__slideInLeft">
            <Image src={jumboPic} alt="background" className="pic-two" />
          </ScrollAnimation>
        </Col>
        <Col lg={6} className="col-two">
          <div className="intro-div">
            <ScrollAnimation
              animateIn="animate__slideInRight"
            >
              <h1 className="intro-title">
                Share your insights about your favorite courses
              </h1>
            </ScrollAnimation>
          </div>
        </Col>
      </Row>
      <div className="call-for-action" align="center">
        <ScrollAnimation animateIn="pulse">
          <button className="action-btn">Start Your Journey Now</button>
        </ScrollAnimation>
      </div>
      <div className="footer-div">
        <p className="copyright">All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Section;
