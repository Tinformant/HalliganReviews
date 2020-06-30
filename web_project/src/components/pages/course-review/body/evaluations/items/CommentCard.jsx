import React from "react";
import { Card, Row, Col } from "react-bootstrap";

import "./CommentCard.css";


function CommentCard(props) {
  return (
    <Card className='comment-card'>
      <p>
        <span className='comment-card-title'>Comment: </span>
        <span className='comment-card-content'>{props.comment}</span>
      </p>
      <Row className='comment-footer' noGutters={true}>
        <Col className='to-left'>{props.userName}</Col>
        <Col className='to-center'>{props.status}</Col>
        <Col className='to-right'>{props.date}</Col>
      </Row>
    </Card>
  );
}

export default CommentCard;