import React from "react";
import "./index.css";
import "./body.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import jumboPic from "./picture/jumbo.jpeg";
import { Row, Col, Image, Carousel, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Body() {
  const popularCourses = [
    {
      department: "COMP",
      courseNumber: "0160",
      subnumber: "00",
      courseName: "Algorithms",
      year: 2020,
      semester: "Fall",
      instructor: "M. Korman",
      url: "/course/comp/0160/01/2020/fall",
      tags: [
        "responsive teacher",
        "joyful classes",
        "too much homework",
        "difficult exams",
        "cute TA",
      ],
    },
  ];
  const history = useHistory();

  var generateCarouselItem = (item) => {
    return (
      <Carousel.Item>
        <div className="occupied">
          <Container
            className="popular-course-container"
            onClick={() => {
              history.push(item.url);
            }}
          >
            <h1 className="popular-course-name">
              {item.department}
              {item.courseNumber}-{item.subnumber} {item.courseName}
            </h1>
            <h3 className="popular-course-details">
              {item.year} {item.semester}
              <span className="popular-course-ins">{item.instructor}</span>
            </h3>
          </Container>
          <Container className="tag-container">
            {item.tags.map((t) => (
              <span className="tag-style">{t}</span>
            ))}
            {/* <span className="tag-style">responsive teacher</span>
            <span className="tag-style">joyful classes</span>
            <span className="tag-style">too much homework</span>
            <span className="tag-style">difficult exams</span>
            <span className="tag-style">cute TA</span> */}
          </Container>
        </div>
      </Carousel.Item>
    );
  };

  return (
    <div className="body-style">
      <Row noGutters className="section-one">
        <Col lg={6} className="col-one">
          <div className="intro-div">
            <ScrollAnimation animateIn="fadeInLeft">
              <h1 className="intro-title">
                <span className="bold-text">Hear</span> what others say about
                your ideal course
              </h1>
              <h1 className="intro-title">
                <span className="bold-text">Share</span> your insights of your
                favorite course
              </h1>
            </ScrollAnimation>
          </div>
        </Col>
        <Col lg={6}>
          <ScrollAnimation animateIn="fadeInRight">
            <Image src={jumboPic} alt="pic1" className="pic-one" />
          </ScrollAnimation>
        </Col>
      </Row>
      {/* Carousel */}
      <Carousel className="slides-style">
        {popularCourses.map((value) => generateCarouselItem(value))}
      </Carousel>

      <footer className="main-footer">
          
      </footer>
    </div>
  );
}

export default Body;
