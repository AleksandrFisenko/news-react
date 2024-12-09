import * as yup from "yup";

export const createPostSchema = yup.object().shape({
  title: yup
    .string()
    .trim()
    .required("Title is required!")
    .min(3, "Title must be at least 3 characters long"),
  text: yup
    .string()
    .trim()
    .required("Text is required!")
    .min(6, "Min length is 6."),
  tags: yup
    .array()
    .of(yup.number().required())
    .min(1, "Select at least one tag")
    .required("Tags is required!"),
  image: yup
    .mixed<File>()
    .required("Image is required")
    .test("fileType", "Unsupported File Format", (value) => {
      return (
        value && ["image/jpeg", "image/png", "image/gif"].includes(value.type)
      );
    }),
});
