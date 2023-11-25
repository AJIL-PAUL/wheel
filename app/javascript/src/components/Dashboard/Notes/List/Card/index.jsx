import React from "react";

import CardBody from "./Body";
import CardFooter from "./Footer";
import CardHeader from "./Header";

const Card = ({ note }) => {
  const { title, description, tags, updatedAt, assignedContact, status } = note;

  return (
    <div className="neeto-ui-border-gray-300 neeto-ui-shadow-xs border p-4">
      <CardHeader title={title} />
      <CardBody description={description} />
      <CardFooter
        assignedContact={assignedContact}
        status={status}
        tags={tags}
        updatedAt={updatedAt}
      />
    </div>
  );
};

export default Card;
