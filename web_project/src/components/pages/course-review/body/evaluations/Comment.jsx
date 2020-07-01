import React from "react";
import CommentCard from "./items/CommentCard";



function Comment(props) {
  return props.data.map((x, i) => {
    return (
      <CommentCard
        key={i}
        userName={x.userName}
        status={x.status}
        date={x.date}
        comment={x.comment}
      />
    );
  });
}

export default Comment;

