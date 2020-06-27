import React from "react";
import "./QuerySheet.css";
import StarRating from "./StarRating";
import { Form } from "react-bootstrap";

function RatingItem(props) {
  const [value1, setValue1] = React.useState({title:"", value:""});
  function handleRating(selected) {
    console.log(selected);
    // setValue1(selected);
    // console.log(value1);
    
    // props.setRatingItems(prevValue => ({
    //     ...prevValue,
    //     [props.name]:selected.value
    // }));

    // console.log(props.setRatingItems);
    // console.log(props.ratingItems);
  }
  return (
    <div className="div-ratings">
      <Form.Label className="form-label">{props.question}</Form.Label>
      <StarRating basic={props.label} handleRating={handleRating}/>
    </div>
  );
}

function CourseEvaluation(props) {
  const [basic] = React.useState([
    { tooltip: "Meh" },
    { tooltip: "Unsatisfactory" },
    { tooltip: "Fair" },
    { tooltip: "Good" },
    { tooltip: "Excellent" },
  ]);

  const [workload] = React.useState([
    { tooltip: "<3" },
    { tooltip: "3-6" },
    { tooltip: "7-10" },
    { tooltip: "11-14" },
    { tooltip: ">14" },
  ]);
  const [difficulty] = React.useState([
    { tooltip: "Very Easy" },
    { tooltip: "Easy" },
    { tooltip: "Normal" },
    { tooltip: "Hard" },
    { tooltip: "Very Hard" },
  ]);

//   props.setRatingItems({
//     courseOverall: 5,
//     courseMaterial: 0,
//     courseWorkload: 0,
//     courseDifficulty: 0,
//     instructorOverall: 0,
//     instructorResponsive: 0,
//     instructorClass: 0,
//     instructorDelivery: 0,
//   });

  return (
    <Form>
      <div className="div-form">
        <RatingItem
          ratingItems={props.ratingItems}
          setRatingItems={props.setRatingItems}
          name="courseOverall"
          question="How do you rate the course in general?"
          label={basic}
        />
        <RatingItem
          question="How do you rate the materials provided?"
          label={basic}
        />
        <RatingItem
          question="How is the workload of the course (hours per week)?"
          label={workload}
        />
        <RatingItem
          question="How difficult do you think the course is?"
          label={difficulty}
        />
      </div>
      <hr />
      <div className="div-form">
        <RatingItem
          question="How do you rate the instructor in general?"
          label={basic}
        />
        <RatingItem
          question="How do you rate the instructor's effectiveness in replying to
          questions outside the class and returning assignment?"
          label={basic}
        />
        <RatingItem
          question="How do you rate the class management of the instructor?"
          label={basic}
        />
        <RatingItem
          question="How do you rate the delivery of the instructor?"
          label={basic}
        />
      </div>
    </Form>
  );
}

export default CourseEvaluation;
