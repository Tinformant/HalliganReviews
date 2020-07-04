import React from "react";

import "./DetailContent.css";

function DetailContent(props) {
  return (
    <div className='detail-content-card'>
      <p>
        <span>Details</span>
      </p>
      <p className='detail-cotent-p'>{props.content}</p>
    </div>
  );
}

export default DetailContent;
