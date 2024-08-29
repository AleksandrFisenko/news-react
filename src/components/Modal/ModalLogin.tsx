import { Box, Modal, TextField, Typography } from "@mui/material";

interface ModalRegistrationProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 400,
  bgcolor: "grey",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalLogin = ({ active, setActive }: ModalRegistrationProps) => {
  // const handleOpen = () => setActive(true);
  const handleClose = () => setActive(false);

  return (
    <Modal
      open={active}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Authorization
        </Typography>
        <TextField id="outlined-email-input" label="email" variant="outlined" />
        <TextField id="outlined-password-input" label="password" variant="outlined" />
      </Box>
    </Modal>
  );
};

export default ModalLogin;
