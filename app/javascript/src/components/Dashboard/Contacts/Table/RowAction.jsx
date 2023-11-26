import React from "react";

import { withT } from "neetocommons/react-utils";
import MoreDropdown from "neetomolecules/MoreDropdown";

const RowAction = withT(({ t }) => (
  <MoreDropdown menuItems={[{ key: 1, label: t("actions.delete") }]} />
));

export default RowAction;
