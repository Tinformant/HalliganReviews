import React from "react";

import ResultCard from "./ResultCard";

const Result = (props) => {
  // console.log("porps form Result tag",);
  // console.log( props);
  const detail = "this is detail information";

  return (
    props.data ? <div className='search-body-result'>
      {props.data.map((x, i) => {
        return <ResultCard key={i} title={x.info} detail={detail} />;
      })}
    </div>
    : <div className='search-body-result'>ppppp</div>
  );
};

export default Result;
