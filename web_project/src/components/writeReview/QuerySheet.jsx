import React from "react";
import "./QuerySheet.css";
import BasicInfo from "./BasicInfo";

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
    </div>
  );
}

export default QuerySheet;