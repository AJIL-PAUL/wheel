import React from "react";

import { Typography } from "neetoui";

import MoreDropdown from "neetomolecules/MoreDropdown";

import { buildDropdownMenuItems } from "./utils";

const Header = ({ title, onClickDelete }) => (
  <div className="flex w-full items-start justify-between">
    <Typography style="h4">{title}</Typography>
    <MoreDropdown menuItems={buildDropdownMenuItems({ onClickDelete })} />
  </div>
);

export default Header;
