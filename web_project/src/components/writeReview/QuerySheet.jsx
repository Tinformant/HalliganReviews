import React from "react";
import "./QuerySheet.css";
import BasicInfo from "./BasicInfo";
import CourseEvaluation from "./CourseEvaluation";
import WriteComment from "./WriteComment";


function QuerySheet() {
  const [year, setYear] = React.useState("");
  const [semester, setSemester] = React.useState("");

  return (
    <div>
      <BasicInfo
        year={year}
        semester={semester}
        setYear={setYear}
        setSemester={setSemester}
        instructor="Tyrion"
      />
      <hr/>
      <CourseEvaluation/>
      <hr />
      <WriteComment/>
    </div>
  );
}

export default QuerySheet;