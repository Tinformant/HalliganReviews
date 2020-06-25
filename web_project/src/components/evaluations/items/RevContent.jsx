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

  const [c1, c2, c3, c4] = props.widthList;
  const [a1, a2, a3, a4] = props.alignList;
  return (
    <Accordion className="rev-content-wrap">
      <Row  className="rev-content-header" noGutters={true}>
        <Col className={a1} sm={c1}>
          <p className="rev-content-name">{props.name}</p>
          <p className="rev-content-description">{props.description}</p>
        </Col>
        <Col className={a2 + " rev-content-avg-score"} sm={c2}>{props.avgScore}</Col>
        <Col className={a3 + " rev-content-plot"} sm={c3}>
            <SingleStackBarPlot width={500} height={40} dist={props.dist} colorScheme={props.colorScheme}/>
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
