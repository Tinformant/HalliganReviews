import React from "react";


import CourseReviewPage from "./pages/course-review";
import SearchResultPage from "./pages/search-result";
import IndexPage from "./pages/index";
import UserAuthenticationPage from "./pages/user-authentication";
import { Switch, Route } from "react-router-dom";


//  export default function App() {
//   return <SearchResultPage />
//  }

export default function App() {
  return (
        <Switch>
          <Route path="/user">
            <UserAuthenticationPage />
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

