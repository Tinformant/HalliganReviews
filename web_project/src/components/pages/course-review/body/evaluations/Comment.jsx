import React from "react";
import CommentCard from "./items/CommentCard";



function Comment(props) {
  return props.data.map((x, i) => {
    return (
      <CommentCard
        key={i}
        userName={x.username}
        status={x.identity}
        date={x.date}
        comment={x.text}
        courseOverall={x.courseOverall}
        instructorOverall={x.instructorOverall}
        workLoad={x.workLoad}
        grade={x.grade}
        assessment={x.assessment}
      />
    );
  });
}

export default Comment;

