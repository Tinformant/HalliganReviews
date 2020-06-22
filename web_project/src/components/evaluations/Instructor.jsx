import React from "react";
import RevItem from "./items/Item";

function Instructor(props) {
  return props.data.map((x, i) => {
    return <div key={i}>
      <RevItem data={x}/>
    </div>;
  });
}

export default Instructor;

