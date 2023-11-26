import React from "react";

import { Avatar, Typography } from "neetoui";

const NameAndRole = ({ contact }) => {
  const { firstName, lastName, role, imageUrl } = contact;
  const { name: roleName } = role;
  const contactName = `${firstName} ${lastName}`;

  return (
    <div className="flex items-center gap-x-4">
      <Avatar size="large" user={{ name: contactName, imageUrl }} />
      <div>
        <Typography style="h5">{contactName}</Typography>
        <Typography className="neeto-ui-text-gray-600" style="body3">
          {roleName}
        </Typography>
      </div>
    </div>
  );
};

export default NameAndRole;
