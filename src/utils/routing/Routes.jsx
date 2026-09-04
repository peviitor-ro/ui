import React from "react";
import { Route } from "react-router-dom";
import Home from "screens/home/home";
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
    path: "/:queryString",
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
