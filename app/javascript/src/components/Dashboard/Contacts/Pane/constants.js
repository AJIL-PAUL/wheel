import { t } from "i18next";
import { AT_LEAST_ONE_ALPHANUMERIC_REGEX, EMAIL_REGEX } from "src/constants";
import * as yup from "yup";

export const INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: null,
};

export const VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .matches(AT_LEAST_ONE_ALPHANUMERIC_REGEX, t("validations.alphanumeric"))
    .required(t("validations.required", { what: t("labels.firstName") })),
  lastName: yup
    .string()
    .trim()
    .matches(AT_LEAST_ONE_ALPHANUMERIC_REGEX, t("validations.alphanumeric"))
    .required(t("validations.required", { what: t("labels.lastName") })),
  email: yup
    .string()
    .trim()
    .required(t("validations.required", { what: t("labels.email") }))
    .matches(
      EMAIL_REGEX,
      t("validations.invalid", { what: t("labels.email") })
    ),
  role: yup
    .object()
    .nullable()
    .shape({ label: yup.string(), value: yup.string() })
    .required(t("validations.required", { what: t("labels.role") })),
});
