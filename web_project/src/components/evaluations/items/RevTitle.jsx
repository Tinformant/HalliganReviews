import React from "react";
import { Row, Col } from "react-bootstrap";

import "./RevTitle.css";

function Legend(props) {
  return (
    <Col className="rev-title-legend-item">
      <i
        className='rev-title-legend-icon fas fa-square-full'
        style={{ color: props.color }}></i>
      <span className="rev-title-legend-text">{props.title}</span>
    </Col>
  );
}

function Title(props) {
  const [w1, w2, w3, w4] = props.widthList;
  const [a1, a2, a3, a4] = props.alignList;
  let legend = [];
  for (let index = 0; index < props.legend.title.length; index++) {
    legend.push({
      title: props.legend.title[index],
      color: props.legend.color[index],
    });
  }

  return (
    <div className="rev-title">
      <Row className="rev-title-content" noGutters={true}>
        <Col className={a1}  sm={w1}> </Col>
        <Col className={a2 + " rev-title-avg-score"} sm={w2}>
          Average Score
        </Col>
        <Col className={a3 + " rev-title-legend"} sm={w3}>
          <Row noGutters={true}>
            {legend.map((x, i) => {
              return <Legend key={i} color={x.color} title={x.title} />;
            })}
          </Row>
        </Col>
        <Col className={a4 + " rev-title-detail"} sm={w4}>
          Details
        </Col>
      </Row>
      <hr className="rev-title-hr"/>
    </div>
  );
}

export default Title;
