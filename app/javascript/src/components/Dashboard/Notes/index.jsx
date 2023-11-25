import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { isNotEmpty } from "neetocist";
import { Plus } from "neetoicons";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";
import { filter } from "ramda";
import { useTranslation } from "react-i18next";

import EmptyState from "components/commons/EmptyState";
import { SINGULAR } from "components/constants";
import { useDebounce } from "neetocommons/react-utils";

import { INITIAL_NOTE_LIST } from "./constants";
import NoteList from "./List";
import CreateNotePane from "./Pane/Create";

const Notes = () => {
  const { t } = useTranslation();

  const [isCreateNotePaneOpen, setIsCreateNotePaneOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState(INITIAL_NOTE_LIST);

  const debouncedSearchTerm = useDebounce(searchTerm).toLowerCase().trim();

  const filteredNotes = filter(
    ({ title }) => title.toLowerCase().includes(debouncedSearchTerm),
    notes
  );

  return (
    <Container isHeaderFixed>
      <Header
        title={t("titles.notes")}
        actionBlock={
          <Button
            icon={Plus}
            label={t("actions.addNew", {
              what: t("labels.notes", SINGULAR).toLocaleLowerCase(),
            })}
            onClick={() => setIsCreateNotePaneOpen(true)}
          />
        }
        searchProps={{
          value: searchTerm,
          onChange: ({ target }) => setSearchTerm(target.value),
        }}
      />
      {isNotEmpty(filteredNotes) ? (
        <NoteList notes={filteredNotes} />
      ) : (
        <EmptyState
          image={<EmptyNotesListImage />}
          primaryAction={() => {}}
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
    </Container>
  );
};

export default Notes;
