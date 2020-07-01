import React from "react";

import NavBar from "../../navigation";
import ReviwBody from "./body";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";

import "./styles.css";

import dataBase from "../../../dataBase";

export default function CourseReviewPage(porps) {
  let match = useRouteMatch();

  return (
      <Switch>
        <Route
          path={`${match.path}/:department/:number/:subnumber/:year/:semester`}>
          <CourseReview />
        </Route>
        <Route path={match.path}>
          <h3>Not a valid Course page</h3>
        </Route>
      </Switch>
  );
};

const CourseReview = (props) => {
  // let info = useParams();
  // TODO html get function from the backend
  let {department, number, subnumber,year, semester} =  useParams();
  
  const query = department + number + subnumber + semester + year;

  let data = dataBase.filter((x) => {
    const info = x.info
    return (
      query === (info.department + info.number + info.subnumber + info.semester + info.year).toLowerCase()
    );
  });
  console.log(data);
  
  return (
    <div className='course-review-page'>
      <NavBar />
      {(data.length !== 0) ? <ReviwBody data={data[0]} /> : <p>No such data found</p>}
    </div>
  );
};
