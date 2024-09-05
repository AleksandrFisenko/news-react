import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { style } from "../../constants/mui";
import { useAppDispatch, useAppSelector } from "../../hooks/typedHooks";
import { modalClose } from "../../redux/actions/creators/modal";
import { fetchAuthRegistration } from "../../redux/actions/creators/auth";
import { RegisterRequest } from "../../types/auth";
import { registrationSchema } from "../../utils/authSchema";

import { Box, Button, Modal, TextField, Typography } from "@mui/material";

const ModalRegistration = () => {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector(
    (state) => state.modals.modalType === "register"
  );
  const error = useAppSelector((state) => state.auth.error);

  const close = () => {
    dispatch(modalClose());
  };

  const onSubmit = (registerData: RegisterRequest) => {
    dispatch(fetchAuthRegistration(registerData));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterRequest>({
    defaultValues: {
      email: "",
      login: "",
      password: "",
    },
    resolver: yupResolver(registrationSchema),
  });

  return (
    <Modal open={isOpen} onClose={close}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Registration
          </Typography>
          <TextField
            id="outlined-email-input"
            label="email"
            type="email"
            variant="outlined"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            id="outlined-basic"
            label="login"
            variant="outlined"
            {...register("login")}
            error={!!errors.login}
            helperText={errors.login?.message}
          />
          <TextField
            id="outlined-password-input"
            label="password"
            type="password"
            variant="outlined"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}
          <Button variant="contained" type="submit">
            sign up
          </Button>
        </Box>
      </form>
    </Modal>
  );
};

export default ModalRegistration;
