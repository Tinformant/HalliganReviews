import React from "react";
import ItemContent from "./Content";

function Item(props) {
  const {
    name,
    data: { undergraduate, graduate, other },
  } = props.data;

  const generalDist = [];

  for (let index = 0; index < undergraduate.length; index++) {
    generalDist.push(undergraduate[index] + graduate[index] + other[index]);
  }

  const sumGeneralDist = generalDist.reduce((cur, acc) => {
    return cur + acc;
  });

  const generalDistPercent = generalDist.map((x) => {
    return x / sumGeneralDist;
  });

  const avgScore = generalDistPercent.reduce((acc, cur, i) => {
    return cur * (i + 1) + acc;
  }).toFixed(1);

  return (
      <ItemContent
        widthList={props.widthList}
        alignList={props.alignList}
        name={name}
        avgScore={avgScore}
        colorScheme={props.color}
        dist={generalDistPercent}
      />
  );
}
export default Item;
