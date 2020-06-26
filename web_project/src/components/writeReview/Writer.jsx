import React from "react";
import "./Writer.css";
import ReviewForm from "./ReviewForm";
import {Nav} from "react-bootstrap";

function Writer() {
  const [showForm, setShowForm] = React.useState(false);

  function handleClick() {
    setShowForm(!showForm);
  }

  return (
    <div className='write-a-review-wrap-up'>
      <Nav.Link
        className='write-a-review-nav-link'
        onClick={handleClick}>
        <i class='fas fa-plus'></i> REVIEW
      </Nav.Link>
      {showForm && <ReviewForm show={showForm} setShow={setShowForm} />}
    </div>
  );
}

export default Writer;
