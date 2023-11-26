import React from "react";

import { noop } from "neetocist";
import { Plus } from "neetoicons";
import { Button } from "neetoui";
import { Header as NeetoUIHeader } from "neetoui/layouts";
import { SINGULAR } from "src/constants";

import { withT } from "neetocommons/react-utils";

const Header = withT(({ t, searchProps, onClickAddContact = noop }) => (
  <NeetoUIHeader
    title={t("titles.contacts")}
    actionBlock={
      <Button
        icon={Plus}
        label={t("actions.addNew", {
          what: t("labels.contact", SINGULAR).toLocaleLowerCase(),
        })}
        onClick={onClickAddContact}
      />
    }
    searchProps={{
      ...searchProps,
      placeholder: t("placeholders.search", {
        what: t("titles.contacts").toLocaleLowerCase(),
      }),
    }}
  />
));

export default Header;
