import React from "react";

import { NoData as NeetoUINoData } from "neetoui";
import { omit } from "ramda";

import { PLURAL, SINGULAR } from "components/constants";
import { withT } from "neetocommons/react-utils";

const NoData = withT(({ t, entityTranslationKey, onClick, ...otherProps }) => (
  <NeetoUINoData
    className="h-full w-full"
    primaryButtonProps={{
      label: t("actions.addNew", {
        what: t(entityTranslationKey, SINGULAR).toLocaleLowerCase(),
      }),
      onClick,
    }}
    title={t("messages.noEntities", {
      entity: t(entityTranslationKey, PLURAL).toLocaleLowerCase(),
    })}
    {...omit(["tReady"], otherProps)}
  />
));

export default NoData;
