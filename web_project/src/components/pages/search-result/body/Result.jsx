import React from "react";

import ResultCard from "./ResultCard";


const Result = (props) => {
  return (
   <div className='search-body-result'>
      { props.data ? props.data.map((x, i) => {
        return <ResultCard key={i} data={x} />;
      }) : null}
    </div>
  );
};

export default Result;
