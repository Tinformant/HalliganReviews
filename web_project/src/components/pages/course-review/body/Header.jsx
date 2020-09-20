import React from "react";

import "./Header.css";

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
    </div>
  );
}

export default Header;
