import React from "react";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";

import NavBar from "../../navigation";
import Body from "./body";

import "./styles.css";

// import serverBackEnd from "../../../fakeBackEnd";

export default function SearchResultPage(props) {
  let match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/:queryKeyword`}>
        <SearchResult />
      </Route>
      <Route path={match.path}>
        <h3>Redirect to the index page</h3>
      </Route>
    </Switch>
  );
}

const SearchResult = (props) => {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [data, setData] = React.useState([]);
  
  let { queryKeyword } = useParams();

  React.useEffect(() => {
    fetch(`/courses/${queryKeyword}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          setData(result.result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [queryKeyword]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className='search-result-page'>
        <NavBar />
        <Body data={data} searchKeyword={queryKeyword} />
      </div>
    );
  }
};
  // let { queryKeyword } = useParams();
  // const response = {};
  // const cmdSearch = {
  //   type: "search",
  //   query: { queryString: queryKeyword, order: "relevant" },
  // };
  // serverBackEnd.get(cmdSearch, response);
  // const data = response.result;
  // return (
  //   <div className='search-result-page'>
  //     <NavBar />
  //     <Body data={data} searchKeyword={queryKeyword} />
  //   </div>
  // );
// };

