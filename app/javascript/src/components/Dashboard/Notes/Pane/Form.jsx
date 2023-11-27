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
          <Pane.Body>
            <div className="w-full space-y-6">
              <Input
                required
                label={t("labels.title")}
                name="title"
                placeholder={t("placeholders.enter", {
                  what: t("labels.title").toLocaleLowerCase(),
                })}
              />
              <Textarea
                required
                label={t("labels.description")}
                name="description"
                placeholder={t("placeholders.enter", {
                  what: t("labels.noteDescription"),
                })}
              />
              <Select
                required
                label={t("labels.assignedContact")}
                name="assignedContact"
                options={contactOptions}
                placeholder={t("placeholders.select", {
                  what: t("labels.contact"),
                })}
              />
              <Select
                isMulti
                required
                label={t("labels.tags")}
                name="tags"
                options={tagOptions}
                placeholder={t("placeholders.select", {
                  what: t("labels.tags"),
                })}
              />
            </div>
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
