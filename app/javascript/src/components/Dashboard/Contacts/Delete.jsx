import React from "react";

import { removeById } from "neetocist";
import { Alert, Toastr } from "neetoui";
import { Trans, useTranslation } from "react-i18next";
import { SINGULAR } from "src/constants";

const DeleteContactAlert = ({
  isOpen,
  selectedContact,
  onClose,
  setContacts,
}) => {
  const { firstName, lastName } = selectedContact;
  const contactName = `${firstName} ${lastName}`;
  const { t } = useTranslation();

  const contactLabel = t("labels.contact", SINGULAR);

  const handleDeleteContact = () => {
    setContacts(prevContacts => removeById(selectedContact.id, prevContacts));
    Toastr.success(t("messages.deletedSuccessfully", { what: contactLabel }));
    onClose();
  };

  return (
    <Alert
      isOpen={isOpen}
      submitButtonLabel={t("actions.delete")}
      message={
        <Trans
          components={{ bold: <strong /> }}
          default="You are permanently deleting the {{entity}} <bold>{{what}}</bold>. This can't be undone."
          i18nKey="alerts.delete.message"
          values={{
            entity: contactLabel.toLocaleLowerCase(),
            what: contactName,
          }}
        />
      }
      title={t("alerts.delete.title", {
        what: contactLabel.toLocaleLowerCase(),
      })}
      onClose={onClose}
      onSubmit={handleDeleteContact}
    />
  );
};

export default DeleteContactAlert;
