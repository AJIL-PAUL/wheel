const routes = {
  home: "/",
  auth: {
    resetPassword: "/my/password/new",
    signup: "/signup",
    login: "/login",
  },
  contacts: "/contacts",
  notes: "/notes",
  profile: "/my/profile",
  settings: {
    index: "/settings",
    changePassword: "/settings?tab=password",
  },
};

export default routes;
