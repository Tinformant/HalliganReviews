import React from "react";
import { Accordion, Button } from "react-bootstrap";

import "./DetailButton.css"

function DetailButton(props) {
  return (
    // <Accordion.Toggle className="rev-detail-button" as={Button} variant='none' eventKey={props.eventKey}>
    <Accordion.Toggle className="rev-detail-button disable" as={Button} variant='none' eventKey="None">
      <i className='rev-detail-button-icon fas fa-angle-double-down'></i>
    </Accordion.Toggle>
  );
}

export default DetailButton;
