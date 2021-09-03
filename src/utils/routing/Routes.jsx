import React from "react";
import { Route } from "react-router-dom";
import Home from "screens/home/Home";
import Serp from "screens/serp/serp";

export const ROUTES = [
  {
    key: "homepage",
    path: "/",
    exact: true,
    component: Home,
  },

  {
    key: "serp",
    path: "/rezultate",
    exact: false,
    component: Serp,
  },
];

const Routing = (route) => {
  return (
    <Route path={route.path} exact={route.exact} component={route.component} />
  );
};

export default Routing;
