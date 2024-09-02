import { useState } from "react";

import { style } from "../../constants/common";
import { modalClose } from "../../redux/actions/creators/modalActionCreators";
import { useAppDispatch, useAppSelector } from "../../hooks/typedHooks";
import { fetchAuth } from "../../redux/actions/creators/authActionCreators";
import { LoginRequest } from "../../types/auth";

import { Box, Button, Modal, TextField, Typography } from "@mui/material";

const ModalLogin = () => {
  const isOpen = useAppSelector((state) => state.modals.modalType === "login");

  const dispatch = useAppDispatch();
  const close = () => {
    dispatch(modalClose());
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    const registerRequest: LoginRequest = {
      email,
      password,
    };
    dispatch(fetchAuth(registerRequest));
  };

  return (
    <Modal open={isOpen} onClose={close}>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Authorization
        </Typography>
        <TextField
          id="outlined-email-input"
          label="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-password-input"
          label="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" onClick={login}>
          sign in
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalLogin;
