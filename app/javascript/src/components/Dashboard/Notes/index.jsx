import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { isNotEmpty } from "neetocist";
import { Container } from "neetoui/layouts";
import { filter } from "ramda";
import { useTranslation } from "react-i18next";

import EmptyState from "components/commons/EmptyState";
import { SINGULAR } from "components/constants";
import { useSearchTerm } from "hooks/useSearchTerm";

import { INITIAL_NOTE_LIST } from "./constants";
import DeleteNoteAlert from "./Delete";
import Header from "./Header";
import NoteList from "./List";
import CreateNotePane from "./Pane/Create";

const Notes = () => {
  const { t } = useTranslation();

  const [isCreateNotePaneOpen, setIsCreateNotePaneOpen] = useState(false);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});

  const { searchTerm, searchProps } = useSearchTerm();
  const [notes, setNotes] = useState(INITIAL_NOTE_LIST);

  const filteredNotes = filter(
    ({ title }) => title.toLowerCase().includes(searchTerm),
    notes
  );

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
      <Header
        searchProps={searchProps}
        setIsCreateNotePaneOpen={setIsCreateNotePaneOpen}
      />
      {isNotEmpty(filteredNotes) ? (
        <NoteList
          handleDeleteNote={handleClickDeleteNote}
          notes={filteredNotes}
        />
      ) : (
        <EmptyState
          image={<EmptyNotesListImage />}
          primaryAction={() => setIsCreateNotePaneOpen(true)}
          subtitle={t("messages.addYourNotes")}
          title={t("messages.emptyNotes")}
          primaryActionLabel={t("actions.addNew", {
            what: t("labels.notes", SINGULAR).toLocaleLowerCase(),
          })}
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
