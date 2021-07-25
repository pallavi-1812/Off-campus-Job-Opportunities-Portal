import React from "react";
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
        <Route path="/" exact component={() => <Redirect to="/jobs" />} />
        <Route path="/jobs" exact component={Home} />
        <Route path="/jobs/search" exact component={Home} />
        <Route path="/jobs/searchByText" exact component={Home} />
        <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/jobs" />)} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
