import React from "react";
import { Switch } from "react-router-dom";
import Routing from "utils/routing/Routes";

const SwitchRoutes = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route) => {
        return <Routing key={route.key} {...route} />;
      })}
    </Switch>
  );
};

export default SwitchRoutes;
