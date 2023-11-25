import React from "react";

import { noop } from "neetocist";
import { Pane, Toastr, Typography } from "neetoui";
import { useTranslation } from "react-i18next";
import { v4 as uuid } from "uuid";

import { SINGULAR } from "components/constants";

import { INITIAL_FORM_VALUES } from "./constants";
import Form from "./Form";

const CreateNotePane = ({ isOpen, onClose = noop, setNotes }) => {
  const { t } = useTranslation();

  const addNote = values => {
    const payload = { id: uuid(), createdAt: new Date(), ...values };
    setNotes(prevNotes => [payload, ...prevNotes]);
    Toastr.success(
      t("messages.addedSuccessfully", { what: t("labels.notes", SINGULAR) })
    );
    onClose();
  };

  return (
    <Pane isOpen={isOpen} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          {t("actions.addNew", {
            what: t("labels.notes", SINGULAR).toLocaleLowerCase(),
          })}
        </Typography>
      </Pane.Header>
      <Form
        handleSubmit={addNote}
        initialValues={INITIAL_FORM_VALUES}
        onCancel={onClose}
      />
    </Pane>
  );
};

export default CreateNotePane;
