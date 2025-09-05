import * as Yup from "yup";

export const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string()
    .min(50, "Minimum 50 character required")
    .required("Description is required"),
  organization: Yup.string().required("Organization is required"),
  mode: Yup.string().required("Mode is required"),
  category: Yup.string().required("Category is required"),
  audience: Yup.string().required("Audience is required"),
  location: Yup.string().required("Location is required"),
  date: Yup.string().required("Date is required"),
  time: Yup.string().required("Time is required"),
  helpline: Yup.string().required("Helpline is required"),
});
