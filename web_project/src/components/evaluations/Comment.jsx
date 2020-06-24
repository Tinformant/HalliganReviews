import React from "react";
import { Card, Row, Col } from "react-bootstrap";

import "./CommentItem.css";


function CommentItem(props) {
  return (
    <Card className="comment-card">
      <p> <span>Comment: </span> {props.comment}</p>
      <Row className="comment-footer" noGutters={true}>
        <Col className="to-left" >{props.userName}</Col>
        <Col className="to-center">{props.status}</Col>
        <Col className="to-right">{props.date}</Col>
      </Row>
    </Card>
  );
}

function Comment(props) {
  return props.data.map((x, i) => {
    return (
      <CommentItem 
        key={i}
        userName={x.userName}
        status={x.status}
        date={x.data}
        comment={x.comment}
      />
    );
  });
}

export default Comment;

