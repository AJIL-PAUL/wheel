import React from "react";

import NoteCard from "./Card";

const List = ({ notes, handleDeleteNote }) => (
  <div className="mb-6 flex w-full flex-col gap-y-4 overflow-y-auto px-6">
    {notes.map(note => (
      <NoteCard handleDeleteNote={handleDeleteNote} key={note.id} note={note} />
    ))}
  </div>
);

export default List;
