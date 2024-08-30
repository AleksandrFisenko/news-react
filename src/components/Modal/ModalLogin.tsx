import { Box, Button, Modal, TextField, Typography } from "@mui/material";

import { style } from "../../constants/common";
import { modalClose } from "../../redux/actions/creators/modalActionCreators";
import { useAppDispatch, useAppSelector } from "../../hooks/typedHooks";

const ModalLogin = () => {
  const isOpen = useAppSelector((state) => state.modals.modalType === "login");

  const dispatch = useAppDispatch();

  const close = () => {
    dispatch(modalClose());
  };

  return (
    <Modal open={isOpen} onClose={close}>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Authorization
        </Typography>
        <TextField id="outlined-email-input" label="email" variant="outlined" />
        <TextField
          id="outlined-password-input"
          label="password"
          variant="outlined"
        />
        <Button variant="contained">sign in</Button>
      </Box>
    </Modal>
  );
};

export default ModalLogin;
