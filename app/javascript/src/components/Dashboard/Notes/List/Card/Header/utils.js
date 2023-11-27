import { t } from "i18next";

export const buildDropdownMenuItems = ({ onClickDelete }) => [
  { key: 1, label: t("actions.delete"), onClick: onClickDelete },
];
