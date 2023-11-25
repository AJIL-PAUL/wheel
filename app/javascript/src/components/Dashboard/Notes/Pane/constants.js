import { t } from "i18next";
import * as yup from "yup";

export const INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  tags: [],
  assignedContact: "",
};

export const VALIDATION_SCHEMA = yup.object().shape({
  title: yup
    .string()
    .trim()
    .required(t("validations.required", { what: t("labels.title") })),
  description: yup
    .string()
    .trim()
    .required(t("validations.required", { what: t("labels.description") })),
  assignedContact: yup
    .object()
    .required(t("validations.required", { what: t("labels.assignedContact") })),
  tags: yup.array().min(
    1,
    t("validations.atLeastOne", {
      what: t("labels.tag").toLocaleLowerCase(),
      min: 1,
    })
  ),
});
