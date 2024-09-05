import * as yup from "yup";

const regEmail = new RegExp(/^\S+@\S+\.\S+$/);

export const registrationSchema = yup.object().shape({
  login: yup
    .string()
    .trim()
    .required("Login is required!")
    .min(3, "Min length is 3."),
  email: yup
    .string()
    .trim()
    .required("Email is required!")
    .matches(regEmail, "Entered value does not match email format."),
  password: yup
    .string()
    .trim()
    .required("Password is required!")
    .min(6, "Min length is 6."),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Email is required!")
    .matches(regEmail, "Entered value does not match email format."),
  password: yup
    .string()
    .trim()
    .required("Password is required!")
    .min(6, "Min length is 6."),
});