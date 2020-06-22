import React from "react";
import DetailButton from "./DetailButton";
import DetailContent from "./DetailContent";
import { Accordion, Button, Row, Col } from "react-bootstrap";
import SingleStackBarPlot from "../plots/SingleStackBarPlot"

function Content(props) {
  const [c1, c2, c3, c4] = props.widthList;
  return (
    <Accordion>
      <Row>
        <Col lg={c1}>{props.name}</Col>
        <Col lg={c2}>{props.avgScore}</Col>
        <Col lg={c3}>
            <SingleStackBarPlot dist={props.dist} colorScheme={props.colorScheme}/>
        </Col>
        <Col lg={c4}>
          <Accordion.Toggle as={Button} variant='link' eventKey='0'>
            <DetailButton />
          </Accordion.Toggle>
        </Col>
      </Row>
      <Accordion.Collapse eventKey='0'>
        <DetailContent />
      </Accordion.Collapse>
    </Accordion>
  );
}

export default Content;
