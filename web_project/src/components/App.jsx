import React from "react";


import CourseReviewPage from "./pages/course-review";
import SearchResultPage from "./pages/search-result";

import { Switch, Route } from "react-router-dom";


//  export default function App() {
//   return <SearchResultPage />
//  }

export default function App() {
  return (
        <Switch>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/course">
            <CourseReviewPage />
          </Route>
          <Route path="/search">
            <SearchResultPage />
          </Route>
          <Route path="/">
            <IndexPage />
          </Route>
        </Switch>
  );
}

const RegisterPage = () => {
  return <h1>Register Page</h1>;
};

const IndexPage = () => {
  return (
    <h1>index page</h1>
  )
};
