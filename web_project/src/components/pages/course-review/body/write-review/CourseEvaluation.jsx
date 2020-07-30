import React from "react";
import "./QuerySheet.css";
import { Form } from "react-bootstrap";
import { Rating } from "@material-ui/lab";

function RatingItem(props) {
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  return (
    <div className="div-ratings">
      <Form.Label className="form-label">{props.question}</Form.Label>
      <br />
      <Rating
        name={props.name}
        emptyIcon={<i className="far fa-star"></i>}
        icon={<i className="fas fa-star"></i>}
        onChange={(event, newValue) => {
          setValue(newValue);
          props.setRatingItems((prevValue) => ({
            ...prevValue,
            [props.name]: newValue,
          }));
          // console.log(props.ratingItems);
          // console.log(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && (
        <span>{props.label[hover !== -1 ? hover : value]}</span>
      )}
    </div>
  );
}

function CourseEvaluation(props) {
  const basic = {
    1: "Meh",
    2: "Unsatisfactory",
    3: "Fair",
    4: "Good",
    5: "Excellent",
  };

  const workload = {
    1: "<3",
    2: "3-6",
    3: "7-10",
    4: "11-14",
    5: ">14",
  };
  const difficulty = {
    1: "Very Easy",
    2: "Easy",
    3: "Normal",
    4: "Hard",
    5: "Very Hard",
  };

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
          ratingItems={props.ratingItems}
          setRatingItems={props.setRatingItems}
          question="How do you rate the materials provided?"
          name="courseMaterial"
          label={basic}
        />
        <RatingItem
          ratingItems={props.ratingItems}
          setRatingItems={props.setRatingItems}
          question="How is the workload of the course (hours per week)?"
          name="courseWorkload"
          label={workload}
        />
        <RatingItem
          ratingItems={props.ratingItems}
          setRatingItems={props.setRatingItems}
          question="How difficult do you think the course is?"
          name="courseDifficulty"
          label={difficulty}
        />
      </div>
      <hr />
      <div className="div-form">
        <RatingItem
          ratingItems={props.ratingItems}
          setRatingItems={props.setRatingItems}
          question="How do you rate the instructor in general?"
          name="instructorOverall"
          label={basic}
        />
        <RatingItem
          ratingItems={props.ratingItems}
          setRatingItems={props.setRatingItems}
          question="How do you rate the instructor's effectiveness in replying to
          questions outside the class and returning assignment?"
          name="instructorEffectiveness"
          label={basic}
        />
        <RatingItem
          ratingItems={props.ratingItems}
          setRatingItems={props.setRatingItems}
          question="How do you rate the feedback of the instructor?"
          name="instructorFeedback"
          label={basic}
        />
        <RatingItem
          ratingItems={props.ratingItems}
          setRatingItems={props.setRatingItems}
          question="How do you rate the accessible of the instructor?"
          name="instructorAccessible"
          label={basic}
        />
      </div>
    </Form>
  );
}

export default CourseEvaluation;
