import React from "react";

import MoreDropdown from "neetomolecules/MoreDropdown";

import { buildDropdownMenuItems } from "./utils";

const RowAction = ({ onClickDelete }) => (
  <MoreDropdown
    dropdownProps={{ strategy: "fixed" }}
    menuItems={buildDropdownMenuItems({ onClickDelete })}
  />
);

export default RowAction;
