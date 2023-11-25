import React from "react";

import { Clock } from "neetoicons";
import { Avatar, Tag } from "neetoui";

import DateFormat from "neetomolecules/DateFormat";

const CardFooter = ({ categories = [], updatedAt, createdBy }) => (
  <div className="neeto-ui-border-gray-300 mt-3 flex w-full justify-between border-t pt-3">
    <div className="flex items-center gap-x-2">
      {categories.map(({ id, label }) => (
        <Tag key={id} label={label} style="secondary" />
      ))}
    </div>
    <div className="flex items-center gap-x-1">
      <Clock color="#68737D" size={12} />
      <DateFormat.FromNow
        date={updatedAt}
        tooltipDateFormat="dateWeekTimeDayExtended"
      />
      <Avatar size="small" user={createdBy} />
    </div>
  </div>
);

export default CardFooter;
