import React from "react";

import { withT } from "neetocommons/react-utils";
import MoreDropdown from "neetomolecules/MoreDropdown";

const RowAction = withT(({ t, onClickDelete }) => (
  <MoreDropdown
    dropdownProps={{ strategy: "fixed" }}
    menuItems={[{ key: 1, label: t("actions.delete"), onClick: onClickDelete }]}
  />
));

export default RowAction;
