import React from "react";

import { t } from "i18next";

import { dateFormat } from "neetocommons/utils";

import NameAndRole from "./NameAndRole";
import RowAction from "./RowAction";

export const getColumnData = ({ handleDeleteContact }) => [
  {
    dataIndex: "name",
    render: (_, contact) => <NameAndRole contact={contact} />,
    title: t("titles.nameAndRole"),
  },
  { dataIndex: "email", title: t("titles.email") },
  {
    dataIndex: "createdAt",
    title: t("titles.createdAt"),
    render: dateFormat.date,
  },
  {
    dataIndex: "actions",
    render: (_, contact) => (
      <RowAction
        contact={contact}
        onClickDelete={() => handleDeleteContact(contact)}
      />
    ),
    width: 70,
  },
];
