import React from "react";

import { Plus } from "neetoicons";
import { Button } from "neetoui";
import { Header as NeetoUIHeader } from "neetoui/layouts";
import { SINGULAR } from "src/constants";

import { withT } from "neetocommons/react-utils";

const Header = withT(({ t, searchProps, onClickAddNote }) => (
  <NeetoUIHeader
    searchProps={searchProps}
    title={t("titles.notes")}
    actionBlock={
      <Button
        icon={Plus}
        label={t("actions.addNew", {
          what: t("labels.note", SINGULAR).toLocaleLowerCase(),
        })}
        onClick={onClickAddNote}
      />
    }
  />
));

export default Header;
