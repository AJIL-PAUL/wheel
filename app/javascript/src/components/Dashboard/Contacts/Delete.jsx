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

  const entityName = t("labels.contact", SINGULAR);

  const handleDeleteContact = () => {
    setContacts(prevContacts => removeById(selectedContact.id, prevContacts));
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
          values={{ entity: entityName.toLocaleLowerCase(), what: contactName }}
        />
      }
      onClose={onClose}
      onSubmit={handleDeleteContact}
    />
  );
};

export default DeleteContactAlert;
