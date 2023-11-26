import { t } from "i18next";
import { ContactBook, Notes, Settings } from "neetoicons";

import routes from "routes";

export const APP_NAME = "Wheel";

export const PASSWORD_PATH = "/my/password/edit";
export const PROFILE_PATH = "/my/profile";
export const LOGOUT_PATH = "/logout";

export const SIDENAV_LINKS = [
  {
    label: t("titles.notes"),
    to: routes.notes,
    icon: Notes,
  },
  {
    label: t("titles.contacts"),
    to: routes.contacts,
    icon: ContactBook,
  },
  {
    label: t("titles.settings"),
    to: routes.settings.index,
    icon: Settings,
  },
];
