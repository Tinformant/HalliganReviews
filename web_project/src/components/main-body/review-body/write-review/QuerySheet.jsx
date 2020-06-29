import React from "react";
import "./QuerySheet.css";
import BasicInfo from "./BasicInfo";
import CourseEvaluation from "./CourseEvaluation";
import WriteComment from "./WriteComment";
import { Button } from "react-bootstrap";

function QuerySheet() {
  const [year, setYear] = React.useState("");
  const [semester, setSemester] = React.useState("");
  const [assessment, setAssessment] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [anonymous, setAnonymous] = React.useState(false);
  const [ratingItems, setRatingItems] = React.useState({
    courseOverall: 0,
    courseMaterial: 0,
    courseWorkload: 0,
    courseDifficulty: 0,
    instructorOverall: 0,
    instructorResponsive: 0,
    instructorClass: 0,
    instructorDelivery: 0,
  });
  function handleSubmit() {
    console.log(ratingItems);
    console.log(comment);
    console.log(status);
    console.log(anonymous);
  }

  return (
    <div>
      <BasicInfo
        year={year}
        semester={semester}
        setYear={setYear}
        setSemester={setSemester}
        instructor='Tyrion'
        assessment={assessment}
        setAssessment={setAssessment}
      />
      <hr />
      <CourseEvaluation
        ratingItems={ratingItems}
        setRatingItems={setRatingItems}
      />
      <hr />
      <WriteComment
        comment={comment}
        setComment={setComment}
        status={status}
        setStatus={setStatus}
        anonymous={anonymous}
        setAnonymous={setAnonymous}
      />
      <div className="div-form">
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default QuerySheet;
