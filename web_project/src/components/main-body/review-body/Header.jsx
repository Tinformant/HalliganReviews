import React from "react";
import { Row, Col } from "react-bootstrap";
import ComboBox from "../../ComboBox";

import "./Header.css";

function SelectBox(props) {
  return (
    <form className="review-header-form">
      <Row className="review-header-form-row" noGutters={true}>
        <Col className="to-left">
          <ComboBox
            aligned="to-left"
            defaultValue={props.data.info.semester[0]}
            availableOption={props.data.info.semester}
            itemName="Semester"
          />
        </Col>
        <Col className="to-center">
          <ComboBox
            aligned="to-center"
            defaultValue={props.data.info.year[0]}
            availableOption={props.data.info.year}
            itemName="Year"
          />
        </Col>
        <Col className="to-right">
          <ComboBox
            aligned="to-right"
            defaultValue={props.data.info.instructor[0]}
            availableOption={props.data.info.instructor}
            itemName="Instructor"
          />
        </Col>
      </Row>
    </form>
  );
}

function CourseDetailCard(props) {
  return (
    <div className='course-detail-card'>
      <span className='course-detail-card-title'>{props.title}:</span>
      <span className='course-detail-card-content'>{props.content}</span>
    </div>
  );
}

function CourseInfo(props) {
  return (
    <div id='course-info'>
      <h1 className='course-name'>
        <div className='course-name-header'>
          <span className='course-name-department'>
            {props.data.info.department}
          </span>
          <span className='course-name-number'>{props.data.info.number}-</span>
          <span className='course-name-subnumber'>
            {props.data.info.subnumber}
          </span>
        </div>
        <span className='course-name-title'>{props.data.info.title}</span>
      </h1>

      <div className='course-detail'>
        <CourseDetailCard title='Year' content={props.data.info.year} />
        <CourseDetailCard title='Semester' content={props.data.info.semester} />
        <CourseDetailCard
          title='Instructor'
          content={props.data.info.instructor}
        />
      </div>
    </div>
  );
}

function Header(props) {
  return (
    <div id="review-header">
      <CourseInfo data={props.data} />
      {/* <SelectBox data={props.data} /> */}
    </div>
  );
}

export default Header;
