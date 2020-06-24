import React from "react";
import { Accordion, Row, Col } from "react-bootstrap";
import DetailButton from "./DetailButton";
import DetailContent from "./DetailContent";
import SingleStackBarPlot from "../plots/SingleStackBarPlot"

import "./RevContent.css";

function Content(props) {
  const [c1, c2, c3, c4] = props.widthList;
  const [a1, a2, a3, a4] = props.alignList;
  return (
    <Accordion className="rev-content-wrap">
      <Row  className="rev-content-header" noGutters={true}>
        <Col className={a1 + " rev-content-name"} sm={c1}>{props.name}</Col>
        <Col className={a2 + " rev-content-avg-score"} sm={c2}>{props.avgScore}</Col>
        <Col className={a3 + " rev-content-plot"} sm={c3}>
            <SingleStackBarPlot dist={props.dist} colorScheme={props.colorScheme}/>
        </Col>
        <Col className={a4 + " rev-content-detail"} sm={c4}>
            <DetailButton eventKey='0'/>
        </Col>
      </Row>
      <Accordion.Collapse eventKey='0'>
        <DetailContent />
      </Accordion.Collapse>
    </Accordion>
  );
}

export default Content;
