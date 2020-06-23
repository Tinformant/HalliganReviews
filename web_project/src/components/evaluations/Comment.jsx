import React from "react";
import { Card, Row, Col } from "react-bootstrap";



function CommentItem(props) {
  return (
    <Card>
      <p> <span>Comment: </span> {props.comment}</p>
      <Row noGutters={true}>
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
        className="comment-item"
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

