import React from "react";
import "./Writer.css";

function Writer() {
  return (
    <div className="write-review">
      <button
        id="write-review-btn"
        className="btn btn-default"
      >
        <i className="feather-icon fas fa-feather-alt"></i>
        <p className="write-review-text">Write a Review</p>
      </button>
    </div>
  );
}

export default Writer;