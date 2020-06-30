import React from "react";
import { Accordion, Button } from "react-bootstrap";
// import DetailButton from "../review-body/evaluations/items/DetailButton";

import "./ResultCard.css";


function DetailButton(props) {
  return (
    <Accordion.Toggle className="search-result-detail-button" as={Button} variant='none' eventKey={props.eventKey}>
      <i className='search-result-detail-button-icon far fa-caret-square-down'></i>
    </Accordion.Toggle>
  );
}


const ResultLink = (props) => {
     return (
     <div className='search-body-result-content'onClick={ props.onClick}>
        <span className='search-body-result-content-item'>Year: {props.year}</span>
        <span className='search-body-result-content-item'>
          Semester: {props.semester}
        </span>
        <span className='search-body-result-content-item-instructor'>
          Instructor: {props.instructor}
        </span>
      </div>
     );
};

const ResultCard = (props) => {
  console.log(props);
  const {
    department,
    number,
    subnumber,
    title,
    instructor,
    semester,
    year,
  } = props.data.info;
  const header =
    department.toUpperCase() +
    number.padStart(4, "0") +
    (subnumber ? "-" + subnumber.padStart(2, "0") : "-01");

  const handleClick = (e) => {
    props.onUpdate((prev) => ({
      ...prev,
      isSearch: false,
      data: props.data,
    }));
  };

  return (
    <Accordion className='search-body-result-item'>
      <div className='search-body-result-link'>
        <span className='search-body-result-item-header'>{header} </span>
        <span className='search-body-result-item-title'>{title}</span>
      </div>
      <ResultLink
        year={year}
        semester={semester}
        instructor={instructor}
        onClick={handleClick}
      />
      <DetailButton eventKey='0' />
      <Accordion.Collapse eventKey='0'>
        <div>
          <ResultLink
            year={year}
            semester={semester}
            instructor={instructor}
            onClick={handleClick}
          />
        </div>
      </Accordion.Collapse>
    </Accordion>
  );
};

export default ResultCard;