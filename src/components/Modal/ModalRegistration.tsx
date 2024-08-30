import { Box, Button, Modal, TextField, Typography } from "@mui/material";

import { style } from "../../constants/common";
import { useAppDispatch, useAppSelector } from "../../hooks/typedHooks";
import { modalClose } from "../../redux/actions/creators/modalActionCreators";

const ModalRegistration = () => {
  const isOpen = useAppSelector(
    (state) => state.modals.modalType === "register"
  );

  const dispatch = useAppDispatch();

  const close = () => {
    dispatch(modalClose());
  };

  return (
    <Modal open={isOpen} onClose={close}>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Registration
        </Typography>
        <TextField id="outlined-email-input" label="email" variant="outlined" />
        <TextField id="outlined-basic" label="login" variant="outlined" />
        <TextField
          id="outlined-password-input"
          label="password"
          variant="outlined"
        />
        <Button variant="contained">sign up</Button>
      </Box>
    </Modal>
  );
};

export default ModalRegistration;
