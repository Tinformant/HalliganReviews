import React from "react";

import "./ResultCard.css";

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
    <div className='search-body-result-item' onClick={handleClick}>
      <p className='search-body-result-link'>
        <span className='search-body-result-item-header'>{header} </span>
        <span className='search-body-result-item-title'>{title}</span>
      </p>
      <p className='search-body-result-content'>
        <span className='search-body-result-content-item'>Year: {year}</span>
        <span className='search-body-result-content-item'>
          Semester: {semester}
        </span>
        <span className='search-body-result-content-item'>
          Instructor: {instructor}
        </span>
      </p>
    </div>
  );
};

export default ResultCard;