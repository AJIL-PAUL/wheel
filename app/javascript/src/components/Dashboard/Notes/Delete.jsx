import React from "react";

import { removeById } from "neetocist";
import { Alert, Toastr } from "neetoui";
import { Trans, useTranslation } from "react-i18next";
import { SINGULAR } from "src/constants";

const DeleteNoteAlert = ({ isOpen, selectedNote, onClose, setNotes }) => {
  const { title } = selectedNote;
  const { t } = useTranslation();

  const noteLabel = t("labels.note", SINGULAR);

  const handleDeleteNote = () => {
    setNotes(prevNotes => removeById(selectedNote.id, prevNotes));
    Toastr.success(t("messages.deletedSuccessfully", { what: noteLabel }));
    onClose();
  };

  return (
    <Alert
      isOpen={isOpen}
      submitButtonLabel={t("actions.delete")}
      title={t("alerts.delete.title", { what: noteLabel.toLocaleLowerCase() })}
      message={
        <Trans
          components={{ bold: <strong /> }}
          default="You are permanently deleting the {{entity}} <bold>{{what}}</bold>. This can't be undone."
          i18nKey="alerts.delete.message"
          values={{ entity: noteLabel.toLocaleLowerCase(), what: title }}
        />
      }
      onClose={onClose}
      onSubmit={handleDeleteNote}
    />
  );
};

export default DeleteNoteAlert;
