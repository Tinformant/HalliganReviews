import React from "react";
import ItemTitle from "./items/RevTitle";
import RevItem from "./items/RevItem";

function GeneralEval(props) {
  const widthList = [3, 2, 6, 1];
  const alignList = ["to-left", "to-center", "to-left", "to-center"].map((x)=>{
      return x + " align-center-vertical";
  });
  
  const legend = {
    title: ["Meh...", "Unsatisfactory", "Fair", "Good", "Excellent"],
    color: ["#012f62", "#6e7693", "#c6c6c6", "#dfb879", "#e9ab14"],
  };

  const data = props.data.filter((x)=>{
    return (x.name !== "Work Load");
  });
  
  return (
    <div className='general-eval'>
      <ItemTitle widthList={widthList} alignList={alignList} legend={legend} />
      {data.map((x, i) => {
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


