import React from "react";
import DetailButton from "./DetailButton";
import DetailContent from "./DetailContent";
import { Accordion, Button, Row, Col } from "react-bootstrap";
import SingleStackBarPlot from "../plots/SingleStackBarPlot"

function Content(props) {
  const [c1, c2, c3, c4] = props.widthList;
  const [a1, a2, a3, a4] = props.alignList;
  return (
    <Accordion>
      <Row noGutters={true}>
        <Col className={a1} sm={c1}>{props.name}</Col>
        <Col className={a2} sm={c2}>{props.avgScore}</Col>
        <Col className={a3} sm={c3}>
            <SingleStackBarPlot dist={props.dist} colorScheme={props.colorScheme}/>
        </Col>
        <Col className={a4} sm={c4}>
          <Accordion.Toggle as={Button} variant='none' eventKey='0'>
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
