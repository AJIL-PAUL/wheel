import React from "react";

import { Typography } from "neetoui";

const CardHeader = ({ title }) => (
  <div className="flex w-full items-start justify-between">
    <Typography style="h4">{title}</Typography>
  </div>
);

export default CardHeader;
