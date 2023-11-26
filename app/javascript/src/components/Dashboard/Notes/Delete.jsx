import React from "react";

import { removeById } from "neetocist";
import { Alert, Toastr } from "neetoui";
import { Trans, useTranslation } from "react-i18next";

import { SINGULAR } from "components/constants";

const DeleteNoteAlert = ({ isOpen, selectedNote, onClose, setNotes }) => {
  const { title } = selectedNote;
  const { t } = useTranslation();

  const entityName = t("labels.note", SINGULAR);

  const deleteNote = () => {
    setNotes(prevNotes => removeById(selectedNote.id, prevNotes));
    Toastr.success(t("messages.deletedSuccessfully", { what: entityName }));
    onClose();
  };

  return (
    <Alert
      isOpen={isOpen}
      submitButtonLabel={t("actions.delete")}
      title={t("alerts.delete.title", { what: entityName.toLocaleLowerCase() })}
      message={
        <Trans
          components={{ bold: <strong /> }}
          default="You are permanently deleting the {{entity}} <bold>{{what}}</bold>. This can't be undone."
          i18nKey="alerts.delete.message"
          values={{ entity: entityName.toLocaleLowerCase(), what: title }}
        />
      }
      onClose={onClose}
      onSubmit={deleteNote}
    />
  );
};

export default DeleteNoteAlert;
