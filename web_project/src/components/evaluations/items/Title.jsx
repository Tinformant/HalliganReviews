import React from "react";
import { Row, Col} from "react-bootstrap";

function Legend(props) {
  return (
    <Col lg={4}>
      <i className='sqr-eval-3 fas fa-square-full' style={{color:props.color}}></i>
      <span>{props.title}</span>
    </Col>
  );
}


function Title(props) {
  const [c1, c2, c3, c4] = props.widthList;
  let legend = [];
  for (let index = 0; index < props.legend.title.length; index++) {
    legend.push({
      title: props.legend.title[index],
      color: props.legend.color[index],
    });
  }
  
  return (
    <Row>
      <Col lg={c1}></Col>
      <Col lg={c2}>Avg.Score</Col>
      <Col lg={c3}>
        <Row>
          {legend.map((x, i) => {
            return <Legend key={i} color={x.color} title={x.title} />;
          })}
        </Row>
      </Col>
      <Col lg={c4}>Detail</Col>
    </Row>
  );
}

export default Title;
