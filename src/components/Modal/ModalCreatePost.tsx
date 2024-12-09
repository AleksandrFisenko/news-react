import {
  Box,
  Button,
  Modal,
  Typography,
  TextField,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { input, modal } from "../../constants/mui";
import { modalClose } from "../../redux/actions/creators/modal";
import { useAppDispatch, useAppSelector } from "../../hooks/typedHooks";
import { selectModalIsPostCreate } from "../../redux/selectors/modal";
import { createPostSchema } from "../../utils/createPostSchema";
import { CreatePost } from "../../types/posts";
import Uploader from "../Uploader/Uploader";
import TagSelect from "../TagSelect/TagSelect";
import { createPostThunk } from "../../redux/slices/createPostSlice";

const ModalCreatePost = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectModalIsPostCreate);

  const close = () => {
    dispatch(modalClose());
  };

  const onSubmit = (postData: CreatePost) => {
    console.log(postData);
    dispatch(createPostThunk(postData))
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreatePost>({
    defaultValues: {
      title: "",
      text: "",
      tags: [],
    },
    resolver: yupResolver(createPostSchema),
  });

  return (
    <Modal open={isOpen} onClose={close}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={modal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Post
          </Typography>
          <TextField
            id="outlined-title-input"
            label="Title"
            variant="outlined"
            sx={input}
            {...register("title")}
            error={!!errors.title}
            helperText={errors.title?.message}
          />
          <TextField
            id="outlined-text-input"
            label="Text"
            multiline
            sx={input}
            rows={5}
            {...register("text")}
            error={!!errors.text}
            helperText={errors.text?.message}
          />
          <TagSelect
            setValue={setValue}
            error={errors.tags}
          />
          <Uploader setValue={setValue} error={errors.image} />
          {errors.image && (
            <Typography color="error" variant="body2">
              Ошибка загрузки изображения
            </Typography>
          )}
          <Button variant="contained" type="submit" sx={{ mt: 2 }}>
            Create Post
          </Button>
        </Box>
      </form>
    </Modal>
  );
};

export default ModalCreatePost;
