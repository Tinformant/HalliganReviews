import React from "react";
import "./Writer.css";
import ReviewForm from "./ReviewForm";

function Writer() {
  const [showForm, setShowForm] = React.useState(false);

  function handleClick() {
    setShowForm(!showForm);
  }

  return (
    <div>
      <div className="write-review">
        <button
          onClick={handleClick}
          id="write-review-btn"
          className="btn btn-default"
        >
          <i className="feather-icon fas fa-feather-alt"></i>
          <p className="write-review-text">Write a Review</p>
        </button>
      </div>
      {showForm && <ReviewForm show={showForm} setShow={setShowForm} />}
    </div>
  );
}

export default Writer;
