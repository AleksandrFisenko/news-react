import { Box, Modal } from "@mui/material";

interface ModalImageProps {
  isActive: boolean;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  imageUrl: string;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
}

const ModalImage = ({
  isActive,
  closeModal,
  imageUrl,
}: ModalImageProps) => {

  return (
    <Modal open={isActive} onClose={closeModal}>
      <Box component="img" sx={style} src={imageUrl}></Box>
    </Modal>
  );
};

export default ModalImage;
