import React from "react";
import "./QuerySheet.css";
import BasicInfo from "./BasicInfo";
import CourseEvaluation from "./CourseEvaluation";
import WriteComment from "./WriteComment";
import { Button } from "react-bootstrap";

function QuerySheet(props) {
  // const [year, setYear] = React.useState("");
  // const [semester, setSemester] = React.useState("");
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
    instructorAccessible: 0,
    instructorFeedback: 0,
    instructorEffectiveness: 0,
  });
  // const [postData, setPostData] = React.useState(
  //   {
  //   // department: "",
  //   username: "",
  //   identity: "",
  //   date: "",
  //   grade: "",
  //   info: props.info,
  //   course: {
  //       overall: "",
  //       material: "",
  //       workload: "",
  //       difficulty: ""
  //   },
  //   instructor: {
  //       overall: "",
  //       accessible: "",
  //       effectiveness: "",
  //       feedback: ""
  //   },
  // assessment: "",
  // comment: ""
  // });

  const [postData, setPostData] = React.useState({date:""})
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  console.log("Querysheet messate: postData", postData);
  console.log("Querysheet message: error", error);
  console.log("Querysheet message: isLoad", isLoaded);
  
  React.useEffect(() => {
    if (postData.date !== "") {
      console.log("enter");
      fetch("/review", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      })
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            console.log(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
  }, [postData]);

  function handleSubmit() {
    const postData = {
      username: "admin",
      identity: status,
      date: "May-19-2021",
      grade: "A+",
      info: props.info,
      course: {
        overall: ratingItems.courseOverall,
        material: ratingItems.courseMaterial,
        workload: ratingItems.courseWorkload,
        difficulty: ratingItems.courseDifficulty,
      },
      instructor: {
        overall: ratingItems.instructorOverall,
        accessible: ratingItems.instructorAccessible,
        effectiveness: ratingItems.instructorEffectiveness,
        feedback: ratingItems.instructorFeedback,
      },
      assessment: assessment,
      comment: comment,
    };
    console.log(postData);
    setPostData(postData);
    // console.log(ratingItems);
    // console.log(comment);
    // console.log(status);
    // console.log(anonymous);
  }

  return (
    <div>
      <BasicInfo
        department={props.info.department}
        courseNumber={props.info.number}
        subNumber={props.info.subnumber}
        courseName={props.info.title}
        year={props.info.year}
        semester={props.info.semester}
        instructor={props.info.instructor}
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
