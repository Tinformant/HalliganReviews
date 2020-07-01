import React from "react";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";

import NavBar from "../../navigation";
import Body from "./body";

import "./styles.css";

import dataBase from "../../../dataBase";

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

  const raw = dataBase.filter((x) => {
    const keywordList = queryKeyword.toLowerCase().split(" ");
    const keyword = new RegExp(keywordList.join("[A-za-z0–9_]*"));
    const info = x.info;
    return (info.department + info.number + info.title)
      .toLowerCase()
      .match(keyword);
  });
  const newData = raw.map((x) => {
    return x.info;
  });

  return (
    <div className='search-result-page'>
      <NavBar />
      <Body data={newData} searchKeyword={queryKeyword} />
    </div>
  );
};

