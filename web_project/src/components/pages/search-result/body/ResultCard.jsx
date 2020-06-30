import React from "react";
import { Accordion, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./ResultCard.css";

function DetailButton(props) {
  return (
    <Accordion.Toggle
      className='search-result-detail-button'
      as={Button}
      variant='none'
      eventKey={props.eventKey}>
      <i className='search-result-detail-button-icon far fa-caret-square-down'></i>
    </Accordion.Toggle>
  );
}

const ResultLink = (props) => {
  const {
    department,
    number,
    subnumber,
    instructor,
    semester,
    year,
  } = props.data;

  return (
    <Link
      to={`/course/${department}/${number}/${subnumber}/${year}/${semester}`.toLowerCase()}
      className='search-body-result-content'>
      <span className='search-body-result-content-item'>Year: {year}</span>
      <span className='search-body-result-content-item'>
        Semester: {semester}
      </span>
      <span className='search-body-result-content-item-instructor'>
        Instructor: {instructor}
      </span>
    </Link>
  );
};

const ResultCard = (props) => {
  console.log(props);
  const { department, number, subnumber, title } = props.data;
  const header =
    department.toUpperCase() +
    number.padStart(4, "0") +
    (subnumber ? "-" + subnumber.padStart(2, "0") : "-01");

  return (
    <Accordion className='search-body-result-item'>
      <div className='search-body-result-link'>
        <span className='search-body-result-item-header'>{header} </span>
        <span className='search-body-result-item-title'>{title}</span>
      </div>
      <ResultLink data={props.data} />
      <DetailButton eventKey='0' />
      <Accordion.Collapse eventKey='0'>
        <div>
          <ResultLink data={props.data} />
        </div>
      </Accordion.Collapse>
    </Accordion>
  );
};

export default ResultCard;
