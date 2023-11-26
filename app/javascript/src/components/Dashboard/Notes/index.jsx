import React, { useState } from "react";

import { isNotEmpty } from "neetocist";
import { Container } from "neetoui/layouts";
import { filter } from "ramda";

import NoData from "components/commons/NoData";
import { useSearchTerm } from "hooks/useSearchTerm";

import { INITIAL_NOTE_LIST } from "./constants";
import DeleteNoteAlert from "./Delete";
import Header from "./Header";
import NoteList from "./List";
import CreateNotePane from "./Pane/Create";

const Notes = () => {
  const [isCreateNotePaneOpen, setIsCreateNotePaneOpen] = useState(false);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});

  const { searchTerm, searchProps } = useSearchTerm();
  const [notes, setNotes] = useState(INITIAL_NOTE_LIST);

  const filteredNotes = filter(
    ({ title }) => title.toLowerCase().includes(searchTerm),
    notes
  );

  const handleClickAddNote = () => setIsCreateNotePaneOpen(true);

  const handleClickDeleteNote = note => {
    setIsDeleteAlertOpen(true);
    setSelectedNote(note);
  };

  const handleCloseDeleteAlert = () => {
    setIsDeleteAlertOpen(false);
    setSelectedNote({});
  };

  return (
    <Container isHeaderFixed>
      <Header searchProps={searchProps} onClickAddNote={handleClickAddNote} />
      {isNotEmpty(filteredNotes) ? (
        <NoteList
          handleDeleteNote={handleClickDeleteNote}
          notes={filteredNotes}
        />
      ) : (
        <NoData
          entityTranslationKey="labels.note"
          onClick={handleClickAddNote}
        />
      )}
      <CreateNotePane
        isOpen={isCreateNotePaneOpen}
        setNotes={setNotes}
        onClose={() => setIsCreateNotePaneOpen(false)}
      />
      <DeleteNoteAlert
        isOpen={isDeleteAlertOpen}
        selectedNote={selectedNote}
        setNotes={setNotes}
        onClose={handleCloseDeleteAlert}
      />
    </Container>
  );
};

export default Notes;
