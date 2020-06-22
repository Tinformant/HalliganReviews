import React from "react";
import { Row, Col} from "react-bootstrap";

function Legend(props) {
  return (
    <Col lg={4}>
      <i className='sqr-eval-3 fas fa-square-full' style={{color:props.color}}></i>
      <span>{props.name}</span>
    </Col>
  );
}


function Title(props) {
  const [c1, c2, c3, c4] = props.widthList;
  const colorScheme = props.colorScheme;
  return (
    <Row>
      <Col lg={c1}></Col>
      <Col lg={c2}>Avg.Score</Col>
      <Col lg={c3}>
        <Row>
          {colorScheme.map((x, i) => {
            return <Legend key={i} color={x.color} name={x.name} />;
          })}
        </Row>
      </Col>
      <Col lg={c4}>Detail</Col>
    </Row>
  );
}

export default Title;
