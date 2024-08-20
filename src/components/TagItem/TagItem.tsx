interface TagItemProps {
  tag: string;
  isLast: boolean;
}

const TagItem = ({ tag, isLast }: TagItemProps) => {
  return <span>{tag + (isLast ? "." : ",")}</span>;
};

export default TagItem;
