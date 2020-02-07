import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { connect } from "react-redux";

import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Leaderboard from "./components/leaderboard/Leaderboard";
import User from "./components/user/User";
import Saved from "./components/saved/Saved";
import { Layout } from "./components/layout/Layout";
import Error from "./components/layout/Error";

const App = props => {
  return (
    <>
      <Router>
        <Layout></Layout>
        <Switch>
          <Redirect exact from="/" to="/leaderboard"></Redirect>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/leaderboard">
            <Leaderboard></Leaderboard>
          </Route>
          <Route path="/user/:id">
            <User></User>
          </Route>
          <PrivateRoute path="/saved" component={Saved}></PrivateRoute>
        </Switch>
      </Router>
      {props.errors && <Error message={props.errors.message}></Error>}
    </>
  );
};

const mapStateToProps = state => {
  return {
    errors: state.errors
  };
};

export default connect(mapStateToProps, {})(App);
