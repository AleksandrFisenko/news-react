import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { style } from "../../constants/mui";
import { modalClose } from "../../redux/actions/creators/modal";
import { useAppDispatch, useAppSelector } from "../../hooks/typedHooks";
import { fetchAuthLogin } from "../../redux/actions/creators/auth";
import { LoginRequest } from "../../types/auth";
import { loginSchema } from "../../utils/authSchema";

import { Box, Button, Modal, TextField, Typography } from "@mui/material";

const ModalLogin = () => {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector((state) => state.modals.modalType === "login");
  const error = useAppSelector((state) => state.auth.error);

  const close = () => {
    dispatch(modalClose());
  };

  const onSubmit = (loginData: LoginRequest) => {
    dispatch(fetchAuthLogin(loginData));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  return (
    <Modal open={isOpen} onClose={close}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Authorization
          </Typography>
          <TextField
            id="outlined-email-input"
            label="email"
            variant="outlined"
            type="email"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            id="outlined-password-input"
            label="password"
            variant="outlined"
            type="password"
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
            sign in
          </Button>
        </Box>
      </form>
    </Modal>
  );
};

export default ModalLogin;
