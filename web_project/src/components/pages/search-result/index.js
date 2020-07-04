import React from "react";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";

import NavBar from "../../navigation";
import Body from "./body";

import "./styles.css";

import serverBackEnd from "../../../fakeBackEnd";

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
  let { queryKeyword } = useParams();
  const response = {};
  const cmdSearch = {
    type: "search",
    query: { queryString: queryKeyword, order: "relevant" },
  };
  serverBackEnd.get(cmdSearch, response);
  const data = response.result;
  return (
    <div className='search-result-page'>
      <NavBar />
      <Body data={data} searchKeyword={queryKeyword} />
    </div>
  );
};

