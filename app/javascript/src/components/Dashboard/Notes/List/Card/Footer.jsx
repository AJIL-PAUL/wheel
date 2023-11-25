import React from "react";

import { Clock } from "neetoicons";
import { Avatar, Tag, Typography } from "neetoui";

import DateFormat from "neetomolecules/DateFormat";

const CardFooter = ({ status, tags = [], updatedAt, assignedContact }) => (
  <div className="neeto-ui-border-gray-300 mt-3 flex w-full justify-between border-t pt-3">
    <div className="flex items-center gap-x-2">
      {tags.map(({ id, label }) => (
        <Tag key={id} label={label} style="secondary" />
      ))}
    </div>
    <div className="neeto-ui-text-gray-600 flex items-center gap-x-1">
      <Clock color="#68737D" size={14} />
      <div className="flex items-end gap-x-1">
        <Typography style="body2">{status}</Typography>
        <DateFormat.FromNow
          date={updatedAt}
          tooltipDateFormat="dateWeekTimeDayExtended"
        />
      </div>
      <Avatar size="small" user={assignedContact} />
    </div>
  </div>
);

export default CardFooter;
