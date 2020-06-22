import React from "react";


function Comment(props) {
    // console.log(props);
  return props.data.map((x, i) => {
    return (
      <div key={i}>
        <p>{x.comment}</p>
        <p>
          <span>{x.userName}</span> <span>{x.status}</span>
        </p>
      </div>
    );
  });
}

export default Comment;

