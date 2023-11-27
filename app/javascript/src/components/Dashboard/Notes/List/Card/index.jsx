import React from "react";

import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Card = ({ note, handleDeleteNote }) => {
  const { title, description, tags, updatedAt, assignedContact, status } = note;

  return (
    <div className="neeto-ui-border-gray-300 neeto-ui-shadow-xs border p-4">
      <Header title={title} onClickDelete={() => handleDeleteNote(note)} />
      <Body description={description} />
      <Footer
        assignedContact={assignedContact}
        status={status}
        tags={tags}
        updatedAt={updatedAt}
      />
    </div>
  );
};

export default Card;
