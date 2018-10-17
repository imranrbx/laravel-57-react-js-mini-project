import React from "react";
import {Redirect, Route} from "react-router-dom";

const CustomRoute = ({component: Component, ...rest}) => {
  const isLoggedIn = true;
  return (
    <Route
      render={props => {
        console.log(props);
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{pathname: "/"}} />
        );
      }}
    />
  );
};
export default CustomRoute;
