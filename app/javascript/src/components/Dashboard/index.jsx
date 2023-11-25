import React from "react";

import { Route, Redirect, Switch } from "react-router-dom";

import Sidebar from "components/commons/Sidebar";
import { DASHBOARD_ROUTES } from "components/routeConstants";
import routes from "routes";

const Dashboard = () => (
  <div className="flex h-screen w-full">
    <Sidebar />
    <Switch>
      {DASHBOARD_ROUTES.map(({ path, component }) => (
        <Route exact component={component} key={path} path={path} />
      ))}
      <Redirect from={routes.home} to={routes.notes} />
    </Switch>
  </div>
);

export default Dashboard;
