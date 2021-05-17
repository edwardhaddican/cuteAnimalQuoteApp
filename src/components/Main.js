import React from "react";
import { NavBar, Quote } from "./index";
import { Switch, Route, Redirect } from "react-router-dom";

const Main = () => {
  return (
    <div className="main_container">
      <h1 className="main_title">
        Welcome to the hottest spot to search for movies
      </h1>
      <NavBar />
      <Switch>
        <Route
          path="/"
          render={() => {
            return <Quote />
          }}
        />
        <Route
          path="/movies"
          render={() => {
            return //component to render;
          }}
        />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default Main;
