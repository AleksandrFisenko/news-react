import { Box, Modal } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../../hooks/typedHooks";
import { modalClose } from "../../redux/actions/creators/modalActionCreators";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
};

const ModalImage = () => {
  const isOpen = useAppSelector((state) => state.modals.isOpen);

  const dispatch = useAppDispatch();

  const close = () => {
    dispatch(modalClose());
  };

  return (
    <Modal open={isOpen} onClose={close}>
      <Box component="img" sx={style} src={null}></Box>
    </Modal>
  );
};

export default ModalImage;
