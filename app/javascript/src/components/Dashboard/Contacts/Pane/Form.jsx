import React from "react";

import { Formik, Form as FormikForm } from "formik";
import { Button, Pane } from "neetoui";
import { Input, Select } from "neetoui/formik";
import { useTranslation } from "react-i18next";
import { modifyKeys } from "utils";

import { VALIDATION_SCHEMA } from "./constants";

import { ROLES } from "../constants";

const Form = ({ initialValues, onSubmit, onCancel }) => {
  const { t } = useTranslation();

  const handleSubmit = async values => {
    const { role, ...rest } = values;
    const payload = { ...rest, role: { id: role.value, name: role.label } };
    onSubmit(payload);
  };

  const roleOptions = modifyKeys({ id: "value", name: "label" }, ROLES);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={VALIDATION_SCHEMA}
      onReset={onCancel}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm className="w-full">
          <Pane.Body>
            <div className="w-full space-y-6">
              <div className="flex gap-x-2">
                <Input
                  required
                  label={t("labels.firstName")}
                  name="firstName"
                />
                <Input required label={t("labels.lastName")} name="lastName" />
              </div>
              <Input required label={t("labels.email")} name="email" />
              <Select
                required
                label={t("labels.role")}
                name="role"
                options={roleOptions}
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
