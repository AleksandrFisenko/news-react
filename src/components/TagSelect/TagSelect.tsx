import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { FieldError, Merge, UseFormSetValue } from "react-hook-form";

import { tags } from "../../data/tags";
import { input } from "../../constants/mui";
import { CreatePost } from "../../types/posts";

interface TagSelectProps {
  setValue: UseFormSetValue<CreatePost>;
  error?: Merge<FieldError, (FieldError | undefined)[]> | undefined;
}

const TagSelect = ({ setValue, error }: TagSelectProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectedTags>) => {
    const {
      target: { value },
    } = event;
    const newSelectedTags =
      typeof value === "string" ? value.split(",") : value;
    setSelectedTags(() => newSelectedTags);
    const updatedTagsId = newSelectedTags.reduce<number[]>((acc, tagName) => {
      const temp = tags.find((tag) => tag.name === tagName);
      if (temp) acc.push(temp.id);
      return acc;
    }, []);
    setValue("tags", updatedTagsId);
  };

  return (
    <FormControl sx={input}>
      <InputLabel id="demo-multiple-chip-label">Tags</InputLabel>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        value={selectedTags}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
      >
        {tags.map((tag) => (
          <MenuItem key={tag.id} value={tag.name} data-id={tag.id}>
            {tag.name}
          </MenuItem>
        ))}
      </Select>
      {error && (
        <Typography color="error" variant="body2">
          {error.message}
        </Typography>
      )}
    </FormControl>
  );
};

export default TagSelect;
