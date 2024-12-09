import { PhotoCamera } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { FieldError, Merge, UseFormSetValue } from "react-hook-form";

import { CreatePost } from "../../types/posts";

import { VisuallyHiddenInput } from "./UploaderStyles";

interface UploaderProps {
  setValue: UseFormSetValue<CreatePost>;
  error?: Merge<FieldError, (FieldError | undefined)[]> | undefined;
}

const Uploader = ({ setValue, error }: UploaderProps) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    setValue("image", file);
  };
  return (
    <>
      <Button
        component="label"
        variant="contained"
        tabIndex={-1}
        startIcon={<PhotoCamera />}
      >
        Upload file
        <VisuallyHiddenInput
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </Button>
      {error && (
        <Typography color="error" variant="body2">
          {error.message}
        </Typography>
      )}
    </>
  );
};

export default Uploader;
