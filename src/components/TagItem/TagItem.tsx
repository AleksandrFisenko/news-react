interface TagProps {
  tag: string;
  isLast: boolean;
}

const TagItem = ({ tag, isLast }: TagProps) => {
  return <span>{tag + (isLast ? "." : ",")}</span>;
};

export default TagItem;
