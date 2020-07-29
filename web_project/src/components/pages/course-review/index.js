import React from "react";

import NavBar from "../../navigation";
import ReviwBody from "./body";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";

import "./styles.css";

import serverBackEnd from "../../../fakeBackEnd";

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
  const cmdData = {
    type: "data",
    query: useParams(),
  };
  const response = {};
  serverBackEnd.get(cmdData, response);
  console.log("useParams", useParams());
  console.log("response is", response);
  // let postData = useParams();
//   const postData = {
//     "department": "EE",
//     "number": "0150", 
//     "subnumber": "01", 
//     "semester": "Spring",
//     "year": "2020"
// };

  // console.log(JSON.stringify(postData));
  // const [error, setError] = React.useState(null);
  // const [isLoaded, setIsLoaded] = React.useState(false);
  // const [resData, setResData] = React.useState({});
  
  // console.log("Reveiw Page messate: postData", postData);
  // console.log("Reveiw Page message: error", error);
  // console.log("Reveiw Page message: isLoad", isLoaded);
  // console.log("Reveiw Page messate: resData", resData);

  // React.useEffect(() => {
  //   fetch('/detail', {
  //     method: "POST", // or 'PUT'
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(postData),
  //   })
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         console.log(result);
  //         setResData(result.result);
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     )
  // }, [postData]);

  return (
    <div className='course-review-page'>
      <NavBar />
      {response.status ? (
        <ReviwBody data={response.data} />
      ) : (
        <p>No such data found</p>
      )}
    </div>
  );
  
  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // } else if (!isLoaded) {
  //   return <div>Loading...</div>;
  // } else {
  //   return (
  //   <div className='course-review-page'>
  //     <NavBar />
  //     { !(Object.keys(resData).length === 0 && resData.constructor === Object ) ? (
  //       <ReviwBody data={resData} />
  //     ) : (
  //       <p>No such data found</p>
  //     )}
  //   </div>
  //   );
  // }
};

//   return (
//   );
// };
