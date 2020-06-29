import React from "react";

import ResultCard from "./ResultCard";

const Result = (props) => {
  const detail = "this is detail information";

  return (
   <div className='search-body-result'>
      { props.data ? props.data.map((x, i) => {
        return <ResultCard key={i} data={x} detail={detail} onUpdate={props.onUpdate}/>;
      }) : null}
    </div>
  );
};

export default Result;
