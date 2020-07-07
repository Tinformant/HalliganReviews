import React from "react";
import { Accordion, Button, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";

import "./ResultCard.css";



function DetailButton(props) {
// TODO : change to minus sign of the detailed button when expanding the drop down menu. 
// TODO : add the disable props rendered as grey 

  const [isActive, setActive] = React.useState(false);
  return (
    <Accordion.Toggle
      className={
        "search-result-detail-button" + (props.disable
          ? " disable"
          : "")+ (isActive
          ? " active"
          : "")
      }
      as={Button}
      variant='none'
      onClick={()=>{
        setActive(!isActive);
      }}
      eventKey={props.eventKey}>
      {(isActive && !props.disable) ? (
        <i className='search-result-detail-button-icon fas fa-minus'></i>
      ) : (
        <i className='search-result-detail-button-icon fas fa-plus'></i>
      )}
    </Accordion.Toggle>
  );
}

const ResultLink = (props) => {
  const { instructor, semester, year, reviews } = props.data;

  return (
    <Link
      to={`/course/${props.department}/${props.number}/${props.subnumber}/${year}/${semester}`.toLowerCase()}
      className={
        "search-body-result-content" + (props.isFirst ? " first-item" : "")
      }>
      <Row noGutters className='search-body-result-content-item-row'>
        <Col sm={2} className='search-body-result-content-item-first'>
          <span className='search-body-result-content-item-header'>Year: </span>
          <span className='search-body-result-content-item-content'>
            {year}
          </span>
        </Col>
        <Col sm={3} className='search-body-result-content-item'>
          <span className='search-body-result-content-item-header'>Semester: </span>
          <span className='search-body-result-content-item-content'>
            {semester}
          </span>
        </Col>
        <Col sm={5} className='search-body-result-content-item'>
          <span className='search-body-result-content-item-header'>Instructor: </span>
          <span className='search-body-result-content-item-content'>
            {instructor}
          </span>
        </Col>
        <Col sm={2} className='search-body-result-content-item-last'>
          Reviews: {reviews}
        </Col>
      </Row>
    </Link>
  );
};

const ResultCard = (props) => {
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
        <hr className='search-body-result-item-hr' />
      </div>
      <div className='search-body-result-first-container'>
        {props.data.availOption.length > 1 ? (
          <DetailButton eventKey='0' />
        ) : (
          <DetailButton disable eventKey='0' />
        )}
        <ResultLink
          isFirst
          department={department}
          number={number}
          subnumber={subnumber}
          data={props.data.availOption[0]}
        />
      </div>
      {props.data.availOption.length > 1 && (
        <Accordion.Collapse eventKey='0'>
          <div className='search-body-result-dropdown'>
            {props.data.availOption.slice(1).map((x, i) => (
              <div className='search-body-result-link-container'>
                <ResultLink
                  isFirst={false}
                  key={i}
                  department={department}
                  number={number}
                  subnumber={subnumber}
                  data={x}
                />
              </div>
            ))}
          </div>
        </Accordion.Collapse>
      )}
    </Accordion>
  );
};

export default ResultCard;
