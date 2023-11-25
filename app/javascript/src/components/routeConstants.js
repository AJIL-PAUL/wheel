import Login from "components/Authentication/Login";
import PasswordReset from "components/Authentication/ResetPassword";
import Signup from "components/Authentication/Signup";
import Dashboard from "components/Dashboard";
import Notes from "components/Dashboard/Notes";
import routes from "routes";

import Contacts from "./Dashboard/Contacts";
import Settings from "./Dashboard/Settings";

export const AUTH_ROUTES = [
  { path: routes.auth.resetPassword, component: PasswordReset },
  { path: routes.auth.signup, component: Signup },
  { path: routes.auth.login, component: Login },
];

export const PRIVATE_ROUTES = [{ path: routes.home, component: Dashboard }];

export const DASHBOARD_ROUTES = [
  { path: routes.notes, component: Notes },
  { path: routes.contacts, component: Contacts },
  { path: routes.settings.index, component: Settings },
];
