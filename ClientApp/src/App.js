import React, { Component } from "react";
import { Route } from "react-router";
import { ApplicationPaths, LoginActions, LogoutActions } from "./components/api-authorization/ApiAuthorizationConstants";
import AuthorizeRoute from "./components/api-authorization/AuthorizeRoute";
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";
import { Login } from "./components/api-authorization/Login";
import { Logout } from "./components/api-authorization/Logout";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <AuthorizeRoute path="/fetch-data" component={FetchData} />
        <Route
          path={ApplicationPaths.Login}
          render={() => loginAction(LoginActions.Login)}
        />
        <Route
          path={ApplicationPaths.LoginFailed}
          render={() => loginAction(LoginActions.LoginFailed)}
        />
        <Route
          path={ApplicationPaths.LoginCallback}
          render={() => loginAction(LoginActions.LoginCallback)}
        />
        <Route
          path={ApplicationPaths.Profile}
          render={() => loginAction(LoginActions.Profile)}
        />
        <Route
          path={ApplicationPaths.Register}
          render={() => loginAction(LoginActions.Register)}
        />
        <Route
          path={ApplicationPaths.LogOut}
          render={() => logoutAction(LogoutActions.Logout)}
        />
        <Route
          path={ApplicationPaths.LogOutCallback}
          render={() => logoutAction(LogoutActions.LogoutCallback)}
        />
        <Route
          path={ApplicationPaths.LoggedOut}
          render={() => logoutAction(LogoutActions.LoggedOut)}
        />
      </Layout>
    );
  }
}

function loginAction(name) {
  return <Login action={name}></Login>;
}

function logoutAction(name) {
  return <Logout action={name}></Logout>;
}
