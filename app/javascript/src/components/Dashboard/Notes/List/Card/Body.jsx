import React from "react";

import { Typography } from "neetoui";

import { truncateSentence } from "utils/string";

const CardBody = ({ description }) => (
  <Typography className="neeto-ui-text-gray-600 pt-1" style="body2">
    {truncateSentence(description, 400)}
  </Typography>
);

export default CardBody;
