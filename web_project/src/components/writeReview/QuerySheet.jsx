import React from "react";
import "./QuerySheet.css";
import BasicInfo from "./BasicInfo";
import CourseEvaluation from "./CourseEvaluation";
import WriteComment from "./WriteComment";


function QuerySheet() {
  const [year, setYear] = React.useState("");
  const [semester, setSemester] = React.useState("");
  const [assessment, setAssessment] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [ratingItems, setRatingItems] = React.useState({
    courseOverall:0,
    courseMaterial:0,
    courseWorkload:0,
    courseDifficulty:0,
    instructorOverall:0,
    instructorResponsive:0,
    instructorClass:0,
    instructorDelivery:0
  });


  return (
    <div>
      <BasicInfo
        year={year}
        semester={semester}
        setYear={setYear}
        setSemester={setSemester}
        instructor="Tyrion"
        assessment={assessment}
        setAssessment={setAssessment}
      />
      <hr/>
      <CourseEvaluation 
        ratingItems={ratingItems}
        setRatingItems={setRatingItems}
      />
      <hr />
      <WriteComment status={status} setStatus={setStatus}/>
    </div>
  );
}

export default QuerySheet;