import React from "react";

import { Plus } from "neetoicons";
import { Button } from "neetoui";
import { Header as NeetoUIHeader } from "neetoui/layouts";

import { SINGULAR } from "components/constants";
import { withT } from "neetocommons/react-utils";

const Header = withT(({ t, searchProps, setIsCreateNotePaneOpen }) => (
  <NeetoUIHeader
    searchProps={searchProps}
    title={t("titles.notes")}
    actionBlock={
      <Button
        icon={Plus}
        label={t("actions.addNew", {
          what: t("labels.notes", SINGULAR).toLocaleLowerCase(),
        })}
        onClick={() => setIsCreateNotePaneOpen(true)}
      />
    }
  />
));

export default Header;
