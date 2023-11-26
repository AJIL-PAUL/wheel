const routes = {
  home: "/",
  auth: {
    resetPassword: "/my/password/new",
    signup: "/signup",
    login: "/login",
  },
  contacts: "/contacts",
  notes: "/notes",
  settings: {
    index: "/settings",
    changePassword: "/settings?tab=password",
    profile: "/settings?tab=profile",
  },
};

export default routes;
