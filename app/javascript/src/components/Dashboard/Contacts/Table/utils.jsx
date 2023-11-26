import React from "react";

import { dateFormat } from "neetocommons/utils";

import NameAndRole from "./NameAndRole";
import RowAction from "./RowAction";

export const getColumnData = () => [
  {
    dataIndex: "name",
    render: (_, contact) => <NameAndRole contact={contact} />,
    title: "Name & Role",
  },
  { dataIndex: "email", title: "Email" },
  { dataIndex: "createdAt", title: "Created At", render: dateFormat.date },
  {
    dataIndex: "actions",
    render: (_, contact) => <RowAction contact={contact} />,
    width: 70,
  },
];
