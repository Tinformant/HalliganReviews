import React from "react";
import ItemTitle from "./Title";
import ItemContent from "./Content";

function Item(props) {
  // console.log(props);

  const widthList = [3, 2, 6, 1];
  const colorScheme = [
    { name: "Terrible", color: "#012f62" },
    { name: "Fair", color: "#6e7693" },
    { name: "Good", color: "#c6c6c6" },
    { name: "Excellent", color: "#dfb879" },
    { name: "Perfect", color: "#e9ab14" },
  ];
  const color = ["#012f62", "#6e7693", "#c6c6c6", "#dfb879", "#e9ab14"];
  const dist = [0.1, 0.1, 0.4, 0.3, 0.1];
  
  const {name, avgScore} = props.data;
  return (
    <div>
      <ItemTitle widthList={widthList} colorScheme={colorScheme} />
      <ItemContent
        widthList={widthList}
        name={name}
        avgScore={avgScore}
        colorScheme={color}
        dist={dist}
      />
    </div>
  );
}
export default Item;
