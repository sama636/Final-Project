import * as yup from "yup";

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name should be at least 3 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Email should be a valid wmail address"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password should ce at least 6 characters")
    .max(30, "Password should ce at most 30 characters"),
    confirmpassword: yup
    .string()
    .required("Confirm password is  required")
    .oneOf([yup.ref("password")], "Passwords do not match"),
});

export default registerSchema;