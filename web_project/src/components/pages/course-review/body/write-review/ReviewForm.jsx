import React from "react";
import QuerySheet from "./QuerySheet";
import "./ReviewForm.css";

 

function ReviewForm(props) {
  function handleClose() {
    props.setShow(!props.show);
  }

  // console.log(props.info);
  return (
    <div className="write-background">
      <div className="write-form">
        <button onClick={handleClose} className="close-form">
          <i className="fas fa-times"></i>
        </button>
        <div className="query-sheet">
            <QuerySheet info={props.info}/>
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;
