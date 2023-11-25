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

const Notes = () => {
  const { t } = useTranslation();

  const [searchTerm, setSearchTerm] = useState("");

  const notes = INITIAL_NOTE_LIST;
  const debouncedSearchTerm = useDebounce(searchTerm).toLowerCase().trim();

  const filteredNotes = filter(
    ({ title }) => title.toLowerCase().includes(debouncedSearchTerm),
    notes
  );

  return (
    <Container>
      <Header
        title={t("titles.notes")}
        actionBlock={
          <Button
            icon={Plus}
            label={t("actions.addNew", {
              what: t("label.notes", SINGULAR),
            })}
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
            what: t("label.notes", SINGULAR),
          })}
        />
      )}
    </Container>
  );
};

export default Notes;
