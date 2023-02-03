import * as Yup from "yup";

// https://github.com/jquense/yup
export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Please enter a registered email"),
  // password: Yup.string()
  //   .required("Please enter a password")
  //   .min(6, "Password must have at least 6 characters"),
  phone: Yup.number()
  .typeError("That doesn't look like a phone number")
  .positive("A phone number can't start with a minus")
  .integer("A phone number can't include a decimal point")
  .min(10, "Phone numbers have 10 digits")
  .required('A phone number is required'),
});
