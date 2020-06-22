import React from "react";
import ItemTitle from "./Title";
import ItemContent from "./Content";

function Item(props) {
  const widthList = [3, 2, 6, 1];
  const legend = {
    title: ["Terrible", "Fair", "Good", "Excellent", "Perfect"],
    color: ["#012f62", "#6e7693", "#c6c6c6", "#dfb879", "#e9ab14"],
  };

  const {
    name,
    data: { undergraduate, graduate, other },
  } = props.data;

  const generalDist = [];

  console.log(props.data.data);

  for (let index = 0; index < undergraduate.length; index++) {
    generalDist.push(undergraduate[index] + graduate[index] + other[index]);
  }

  const sumGeneralDist = generalDist.reduce((cur, acc) => {
    return cur + acc;
  });

  const generalDistPercent = generalDist.map((x) => {
    return x / sumGeneralDist;
  });

  const avgScore = generalDistPercent.reduce((cur, acc, i) => {
    return cur * (i + 1) + acc;
  });

  //   const {name, avgScore} = props.data;
  return (
    <div>
      <ItemTitle widthList={widthList} legend={legend} />
      <ItemContent
        widthList={widthList}
        name={name}
        avgScore={avgScore}
        colorScheme={legend.color}
        dist={generalDistPercent}
      />
    </div>
  );
}
export default Item;
