import { useState } from "react";

import { style } from "../../constants/common";
import { useAppDispatch, useAppSelector } from "../../hooks/typedHooks";
import { modalClose } from "../../redux/actions/creators/modalActionCreators";
import { fetchAuth } from "../../redux/actions/creators/authActionCreators";
import { RegisterRequest } from "../../types/auth";

import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { Form } from "react-hook-form";

const ModalRegistration = () => {
  const isOpen = useAppSelector(
    (state) => state.modals.modalType === "register"
  );

  const dispatch = useAppDispatch();
  const close = () => {
    dispatch(modalClose());
  };

  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const registration = () => {
    const registerRequest: RegisterRequest = {
      email,
      login,
      password,
    };
    dispatch(fetchAuth(registerRequest));
  };

  return (
    <Modal open={isOpen} onClose={close}>
      <Box sx={style}>
        <Form>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Registration
          </Typography>
          <TextField
            id="outlined-email-input"
            label="email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="login"
            variant="outlined"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <TextField
            id="outlined-password-input"
            label="password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" onClick={registration}>
            sign up
          </Button>
        </Form>
      </Box>
    </Modal>
  );
};

export default ModalRegistration;
