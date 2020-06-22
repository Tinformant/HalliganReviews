import React from "react";
import RevItem from "./items/Item";

function Course(props) {
  return props.data.map((x, i) => {
    return <div key={i}>
      <RevItem data={x}/>
    </div>;
  });
}

export default Course;

