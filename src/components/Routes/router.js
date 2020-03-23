import React, { useContext } from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import { Input } from "../../Layout/input";
import { Tebak } from "../../Layout/tebak";
import { NotFound } from "../../Layout/notFound";
import { DataContext } from "../Context/DataContext";

export const LinkGan = prop => {
  const { random } = useContext(DataContext);

  return (
    <Router basename="/menghapal">
      {prop.children}
      <Switch>
        <Route exact path="/" component={Input} />
        {random.length < 1
          ? <Redirect from="/tebak" to="/" />
          : <Route path="/tebak" component={Tebak} />}
        <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
    </Router>
  );
};
