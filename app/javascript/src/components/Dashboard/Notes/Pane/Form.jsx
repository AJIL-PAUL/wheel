import React from "react";

import { Formik, Form as FormikForm } from "formik";
import { Button, Pane } from "neetoui";
import { Input, Select, Textarea } from "neetoui/formik";
import { useTranslation } from "react-i18next";
import { modifyKeys } from "utils";

import { VALIDATION_SCHEMA } from "./constants";

import { CONTACTS, TAGS } from "../constants";

const Form = ({ initialValues, handleSubmit, onCancel }) => {
  const { t } = useTranslation();

  const handleFormSubmit = async values => {
    const { assignedContact, tags, ...rest } = values;
    const payload = {
      ...rest,
      assignedContact: {
        id: assignedContact.value,
        name: assignedContact.label,
      },
      tags: modifyKeys({ value: "id" }, tags),
    };
    handleSubmit(payload);
  };

  const contactOptions = modifyKeys({ name: "label", id: "value" }, CONTACTS);
  const tagOptions = modifyKeys({ id: "value" }, TAGS);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={VALIDATION_SCHEMA}
      onReset={onCancel}
      onSubmit={handleFormSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              required
              className="w-full flex-grow-0"
              label={t("labels.title")}
              name="title"
            />
            <Textarea
              required
              className="w-full flex-grow-0"
              label={t("labels.description")}
              name="description"
            />
            <Select
              required
              className="w-full flex-grow-0"
              label={t("labels.assignedContact")}
              name="assignedContact"
              options={contactOptions}
            />
            <Select
              isMulti
              required
              className="w-full flex-grow-0"
              label={t("labels.tags")}
              name="tags"
              options={tagOptions}
            />
          </Pane.Body>
          <Pane.Footer className="gap-x-2">
            <Button
              disabled={isSubmitting}
              label={t("actions.saveChanges")}
              loading={isSubmitting}
              style="primary"
              type="submit"
            />
            <Button label={t("actions.cancel")} style="text" type="reset" />
          </Pane.Footer>
        </FormikForm>
      )}
    </Formik>
  );
};
export default Form;
