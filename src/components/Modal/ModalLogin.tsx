import { yupResolver } from "@hookform/resolvers/yup";

import { style } from "../../constants/common";
import { modalClose } from "../../redux/actions/creators/modalActionCreators";
import { useAppDispatch, useAppSelector } from "../../hooks/typedHooks";
import { fetchAuthLogin } from "../../redux/actions/creators/authActionCreators";
import { LoginRequest } from "../../types/auth";
import { loginSchema } from "../../utils/authSchema";

import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

const ModalLogin = () => {
  const isOpen = useAppSelector((state) => state.modals.modalType === "login");

  const dispatch = useAppDispatch();
  
  const close = () => {
    dispatch(modalClose());
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

  const onSubmit = (loginData: LoginRequest) => {
    dispatch(fetchAuthLogin(loginData));
  };

  const error = useAppSelector((state) => state.auth.error);

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
