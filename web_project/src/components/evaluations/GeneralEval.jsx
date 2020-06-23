import React from "react";
import ItemTitle from "./items/Title";
import RevItem from "./items/Item";

function GeneralEval(props) {
  const widthList = [3, 2, 6, 1];
  const alignList = ["to-left", "to-center", "to-left", "to-center"].map((x)=>{
      return x + " align-center-vertical";
  });
  
  const legend = {
    title: ["Terrible", "Fair", "Good", "Excellent", "Perfect"],
    color: ["#012f62", "#6e7693", "#c6c6c6", "#dfb879", "#e9ab14"],
  };

  return (
    <div>
      <ItemTitle widthList={widthList} alignList={alignList} legend={legend} />
      {props.data.map((x, i) => {
        return (
          <RevItem
            key={i}
            widthList={widthList}
            alignList={alignList}
            data={x}
            color={legend.color}
          />
        );
      })}
    </div>
  );
}

export default GeneralEval;


