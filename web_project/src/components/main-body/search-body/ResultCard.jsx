import React from "react";

import "./ResultCard.css";

const ResultCard = (props) => {
    console.log(props);
    const {department, number, subnumber, title} = props.title;
    const header = department.toUpperCase() + number.padStart(4, '0') + (subnumber ? "-" + subnumber.padStart(2,"0") : "-01");
    return (
      <div className='search-body-result-item'>
        <p className='search-body-result-link'>
          <span className='search-body-result-item-header'>{header} </span>
          <span className='search-body-result-item-title'>{title}</span>
        </p>
        <p className='search-body-result-content'>
            {props.detail}
        </p>
      </div>
    );
}

export default ResultCard;