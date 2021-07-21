import React from "react";
import { Container } from "@material-ui/core";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {/* <Redirect exact from="/jobs" to="/jobs/tpc" />
        <Route exact path="/home/:page?" render={(props) => <Home {...props} />} /> */}
        <Route path="/" exact component={() => <Redirect to="/jobs/tpc" />} />
        <Route path="/jobs" exact component={() => <Redirect to="/jobs/tpc" />} />
        <Route path="/jobs/:page?" exact component={(props) => <Home {...props} />} />
        <Route path="/jobs/:page?/search" exact component={(props) => <Home {...props} />} />
        <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/jobs/tpc" />)} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
