import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Plus } from "neetoicons";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";
import { filter, isEmpty } from "ramda";
import { useTranslation } from "react-i18next";

import EmptyState from "components/commons/EmptyState";
import { PLURAL, SINGULAR } from "components/constants";
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
        title={t("titles.notes", PLURAL)}
        actionBlock={
          <Button
            icon={Plus}
            label={t("actions.addNew", {
              what: t("titles.notes", SINGULAR),
            })}
          />
        }
        searchProps={{
          value: searchTerm,
          onChange: ({ target }) => setSearchTerm(target.value),
        }}
      />
      {isEmpty(filteredNotes) ? (
        <EmptyState
          image={<EmptyNotesListImage />}
          primaryAction={() => {}}
          subtitle={t("messages.addYourNotes")}
          title={t("messages.emptyNotes")}
          primaryActionLabel={t("actions.addNew", {
            what: t("titles.notes", SINGULAR),
          })}
        />
      ) : (
        <NoteList notes={filteredNotes} />
      )}
    </Container>
  );
};

export default Notes;
