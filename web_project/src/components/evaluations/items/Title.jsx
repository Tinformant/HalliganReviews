import React from "react";
import { Row, Col} from "react-bootstrap";

function Legend(props) {
  return (
    <Col lg={4}>
      <i className='sqr-eval-3 fas fa-square-full' style={{color:props.color,margin:"0px 5px"}}></i>
      <span>{props.title}</span>
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
    <Row noGutters={true}>
      <Col className={a1} sm={w1}></Col>
      <Col className={a2} sm={w2}>
        Avg.Score
      </Col>
      <Col className={a3} sm={w3}>
        <Row noGutters={true}>
          {legend.map((x, i) => {
            return <Legend key={i} color={x.color} title={x.title} />;
          })}
        </Row>
      </Col>
      <Col className={a4} sm={w4}>
        Detail
      </Col>
    </Row>
  );
}

export default Title;
