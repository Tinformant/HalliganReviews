import React from "react";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";

import UserForm from "./UserForm";
import bgPicture from "./picture/tufts-logo1.jpg";


import "./styles.css";


export default function UserAutenticationPage(props) {
  let match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/:option`}>
        <UserAuthentication />
      </Route>
      <Route path={match.path}>
        <h3>Redirect to the index page</h3>
      </Route>
    </Switch>
  );
}

const UserAuthentication = (props) => {
  let { option } = useParams();

  return (
    <div className='user-authentication-page-background'>
      {/* <img className='user-authentication-page-background-img' src={bgPicture} alt="tufts-logo" srcset=""/> */}
      <div className='user-authentication-page'>
        <UserForm activeKey={option} />
      </div>
    </div>
  );
};

