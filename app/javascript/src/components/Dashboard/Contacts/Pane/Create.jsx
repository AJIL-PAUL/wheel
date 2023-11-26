import React from "react";

import { noop } from "neetocist";
import { Pane, Toastr, Typography } from "neetoui";
import { useTranslation } from "react-i18next";
import { SINGULAR } from "src/constants";
import { v4 as uuid } from "uuid";

import { INITIAL_FORM_VALUES } from "./constants";
import Form from "./Form";

const CreateContactPane = ({ isOpen, onClose = noop, setContacts = noop }) => {
  const { t } = useTranslation();

  const addContact = values => {
    const payload = { id: uuid(), createdAt: new Date(), ...values };
    setContacts(prevContacts => [payload, ...prevContacts]);
    Toastr.success(
      t("messages.addedSuccessfully", { what: t("labels.contact", SINGULAR) })
    );
    onClose();
  };

  return (
    <Pane isOpen={isOpen} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          {t("actions.addNew", {
            what: t("labels.contact", SINGULAR).toLocaleLowerCase(),
          })}
        </Typography>
      </Pane.Header>
      <Form
        handleSubmit={addContact}
        initialValues={INITIAL_FORM_VALUES}
        onCancel={onClose}
      />
    </Pane>
  );
};

export default CreateContactPane;
