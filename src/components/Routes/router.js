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
    <Router>
      {prop.children}
      <Switch>
        <Route exact path="/ngapalkeun" component={Input} />
        {random.length < 1
          ? <Redirect from="/ngapalkeun/tebak" to="/" />
          : <Route path="/ngapalkeun/tebak" component={Tebak} />}
        <Route path="ngapalkeun/404" component={NotFound} />
        <Redirect from="*" to="ngapalkeun/404" />
      </Switch>
    </Router>
  );
};
