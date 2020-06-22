import React from "react";


function Comment(props) {
    // console.log(props);
  return props.data.map((x, i) => {
    return <div key={i}>
      <p>{i}:{x}</p>
    </div>;
  });
}

export default Comment;

