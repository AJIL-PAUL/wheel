import React from "react";

import { Typography } from "neetoui";

import { withT } from "neetocommons/react-utils";
import MoreDropdown from "neetomolecules/MoreDropdown";

const CardHeader = withT(({ t, title, onClickDelete }) => (
  <div className="flex w-full items-start justify-between">
    <Typography style="h4">{title}</Typography>
    <MoreDropdown
      menuItems={[
        { key: 1, label: t("actions.delete"), onClick: onClickDelete },
      ]}
    />
  </div>
));

export default CardHeader;
