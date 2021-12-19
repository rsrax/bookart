import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from "./index";

const PrivateRoute = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() && isAuthenticated().user.role === 0 ? (
        <Component {...props} />
      ) : (
        <Redirect to='/signin' />
      )
    }
  />
);

export default PrivateRoute;