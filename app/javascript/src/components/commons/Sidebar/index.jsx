import React from "react";

import { Sidebar as NeetoUISidebar } from "neetoui/layouts";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import authenticationApi from "apis/authentication";
import { useAuthDispatch } from "contexts/auth";
import { useUserState } from "contexts/user";
import routes from "routes";

import { APP_NAME, SIDENAV_LINKS } from "./constants";

const Sidebar = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const authDispatch = useAuthDispatch();
  const { user } = useUserState();
  const {
    first_name: firstName,
    last_name: lastName,
    profile_image_path: imageUrl,
    email,
  } = user;

  const handleLogout = async () => {
    try {
      await authenticationApi.logout();
      authDispatch({ type: "LOGOUT" });
      window.location.href = routes.auth.login;
    } catch (error) {
      logger.error(error);
    }
  };

  const bottomLinks = [
    {
      label: t("titles.myProfile"),
      onClick: () => history.push(routes.settings.profile, { resetTab: true }),
    },
    {
      label: t("titles.changePassword"),
      onClick: () =>
        history.push(routes.settings.changePassword, { resetTab: true }),
    },
    {
      label: t("actions.logout"),
      onClick: handleLogout,
    },
  ];

  return (
    <NeetoUISidebar
      appName={APP_NAME}
      changelogProps={{ id: "neetochangelog-trigger" }}
      navLinks={SIDENAV_LINKS}
      organizationInfo={{ name: "Wheel", subdomain: "bigbinary.com" }}
      profileInfo={{
        bottomLinks,
        email,
        imageUrl,
        name: `${firstName} ${lastName}`,
      }}
    />
  );
};

export default Sidebar;
