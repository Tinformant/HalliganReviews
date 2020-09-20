import React from "react";
import { Card, Row, Col } from "react-bootstrap";

import "./CommentCard.css";


const CommentEvalItem = (props) => {
  return (
    <p className="comment-card-eval-item">
      <span className='comment-card-eval-title'>{props.title}:</span>
  <span className='comment-card-eval-content'>{props.content}</span>
    </p>
  );
};

function CommentCard(props) {
  const evaluate = [
    {
      title: "Course Overall",
      content: props.courseOverall,
    },
    {
      title: "Instructor Overall",
      content: props.instructorOverall,
    },
    {
      title: "Work Load",
      content: props.workLoad,
    },
    {
      title: "Letter Grade",
      content: props.grade,
    }
  ];
  console.log(evaluate);
  
  return (
    <Card className='comment-card'>
      <Row noGutters>
        <Col sm={3} className="comment-card-eval">
          {evaluate.map((x, i)=>{
            return <CommentEvalItem key={i} title={x.title} content={x.content} />;
          })}
        </Col>
        <Col sm={9}>
          <p className="comment-card-assessment">
            <span className='comment-card-title'>Assessment: </span>
            <span className='comment-card-content'>{props.assessment}</span>
          </p>
          <p className="comment-card-comment">
            <span className='comment-card-title'>Comment: </span>
            <span className='comment-card-content'>{props.comment}</span>
          </p>
          <Row className='comment-footer' noGutters>
            <Col className='to-left'>{props.userName}</Col>
            <Col className='to-center'>{props.status}</Col>
            <Col className='to-right'>{props.date}</Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}

export default CommentCard;