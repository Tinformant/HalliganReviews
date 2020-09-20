import React from "react";
import { Accordion, Row, Col } from "react-bootstrap";
import DetailButton from "./DetailButton";
import DetailContent from "./DetailContent";
import SingleStackBarPlot from "../plots/SingleStackBarPlot"

import "./RevContent.css";


function Content(props) {
  // const [plotSize, setPlotSize] = React.useState({height: 0, width: 0})
  // const ref = React.useRef(null)
  
  // React.useEffect(() => {
  //   setPlotSize({height: ref.current.clientHeight, width: ref.current.clientWidth})
  // }, [plotSize.width]);
  const {
    name,
    description, 
    distribution, 
    // average,
    details
  } = props.data;

  // const {
  //   name,
  //   description, 
  //   data: { undergraduate, graduate, other },
  // } = props.data;

  // const generalDist = [];

  // for (let index = 0; index < undergraduate.length; index++) {
  //   generalDist.push(undergraduate[index] + graduate[index] + other[index]);
  // }

  // const sumGeneralDist = generalDist.reduce((cur, acc) => {
  //   return cur + acc;
  // });

  // const generalDistPercent = generalDist.map((x) => {
  //   return x / sumGeneralDist;
  // });

  const avgScore = distribution.reduce((acc, cur, i) => {
    return cur * (i + 1) + acc;
  }).toFixed(1);


  const [c1, c2, c3, c4] = props.widthList;
  const [a1, a2, a3, a4] = props.alignList;

  return (
    <Accordion className="rev-content-wrap">
      <Row  className="rev-content-header" noGutters={true}>
        <Col className={a1} sm={c1}>
          <p className="rev-content-name">{name}</p>
          <p className="rev-content-description">{description}</p>
        </Col>
        <Col className={a2 + " rev-content-avg-score"} sm={c2}>{avgScore}</Col>
        <Col className={a3 + " rev-content-plot"} sm={c3}>
            <SingleStackBarPlot width={500} height={40} dist={distribution} colorScheme={props.color}/>
        </Col>
        <Col className={a4 + " rev-content-detail"} sm={c4}>
            <DetailButton eventKey='0'/>
        </Col>
      </Row>
      <Accordion.Collapse eventKey='0'>
        <DetailContent content={details}/>
      </Accordion.Collapse>
    </Accordion>
  );
}

export default Content;
