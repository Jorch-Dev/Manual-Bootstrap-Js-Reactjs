import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...props }) => {
  let authenticated;
  authenticated = true;
  return (
    <Route exact={props.exact} path={props.path}>
      {authenticated ? <Component /> : <Redirect to="/" />}
    </Route>
  );
};

export default PrivateRoute;
