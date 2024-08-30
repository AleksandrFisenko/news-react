import { Box, Button, Modal, TextField, Typography } from "@mui/material";

interface ModalRegistrationProps {
  isActive: boolean;
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
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 2,
};

const ModalRegistration = ({ isActive, setActive }: ModalRegistrationProps) => {
  const handleClose = () => setActive(false);

  return (
    <Modal
      open={isActive}
      onClose={handleClose}
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Registration
        </Typography>
        <TextField id="outlined-email-input" label="email" variant="outlined" />
        <TextField id="outlined-basic" label="login" variant="outlined" />
        <TextField id="outlined-password-input" label="password" variant="outlined" />
        <Button variant="contained">sign up</Button>
      </Box>
    </Modal>
  );
};

export default ModalRegistration;
