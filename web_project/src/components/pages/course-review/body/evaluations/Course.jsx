import React from "react";
import RevTitle from "./items/RevTitle";
import RevContent from "./items/RevContent";
import GeneralEval from "./GeneralEval";

function Course(props) {
  const widthList = [3, 2, 6, 1];
  const alignList = ["to-left", "to-center", "to-left", "to-center"].map((x)=>{
      return x + " align-center-vertical";
  });
  
  const workLoadLegend = {
    title: ["<3", "3-6", "7-10", "11-14", ">14"],
    color: ["#012f62", "#6e7693", "#c6c6c6", "#dfb879", "#e9ab14"],
  };
  const difficultyLegend = {
    title: ["Very Easy", "Easy", "Normal", "Hard", "Very Hard"],
    color: ["#012f62", "#6e7693", "#c6c6c6", "#dfb879", "#e9ab14"],
  };

  const generalData = props.data.filter((x)=>{
    return (x.name !== "WorkLoad" && x.name !== "Difficulty");
  });
  const workLoadData = props.data.filter((x)=>{
    return (x.name === "WorkLoad");
  });
  const difficultyData = props.data.filter((x)=>{
    return (x.name === "Difficulty");
  });

  return (
    <div>
      <GeneralEval data={generalData}/>
      <RevTitle widthList={widthList} alignList={alignList} legend={workLoadLegend} />
      {workLoadData.map((x, i) => {
        return (
          <RevContent
            key={i}
            widthList={widthList}
            alignList={alignList}
            data={x}
            color={workLoadLegend.color}
          />
        );
      })}
      <RevTitle widthList={widthList} alignList={alignList} legend={difficultyLegend} />
      {difficultyData.map((x, i) => {
        return (
          <RevContent
            key={i}
            widthList={widthList}
            alignList={alignList}
            data={x}
            color={difficultyLegend.color}
          />
        );
      })}
    
    </div>
  )
}

export default Course;

