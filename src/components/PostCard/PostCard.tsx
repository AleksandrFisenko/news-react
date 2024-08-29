import { useState } from "react";

import { Tag } from "../../types/posts";
import { formatDate } from "../../utils/dateUtils";
import TagItem from "../TagItem";
import placeholderImage from "../../images/ibs.png";
import placeholderAvatar from "../../images/avatar.png";

import classes from "./PostCard.module.css";

interface PostCardProps {
  imageUrl: string | null;
  email: string;
  avatarUrl: string | null;
  updatedAt: string;
  title: string;
  text: string;
  tags: Tag[];
}

const PostCard = ({
  imageUrl,
  email,
  avatarUrl,
  updatedAt,
  title,
  text,
  tags,
}: PostCardProps) => {
  const [isDetailsUnhidden, setDetails] = useState(false);

  const changeDetails = () => {
    setDetails((prevDetails) => !prevDetails);
  };

  const cardTextClasses = isDetailsUnhidden
    ? classes.card__text
    : classes.card__text + " " + classes.card__text_hidden;

  return (
    <div className={classes.card}>
      <div className={classes.card__main}>
        <img
          src={imageUrl ?? placeholderImage}
          alt="Post image"
          className={classes.card__image}
        />
        <div className={classes.card__texts}>
          <div className={classes.card__author}>
            <img
              src={avatarUrl ?? placeholderAvatar}
              alt="User Avatar"
              className={classes.card__avatar}
            />
            <p className={classes.card__email}>{email}</p>
          </div>
          <p className={classes.card__date}>{formatDate(updatedAt)} </p>
          <p className={classes.card__title}>{title}</p>
          <p className={cardTextClasses} onClick={changeDetails}>
            {text}
          </p>
        </div>
      </div>
      <div className={classes.card__tags}>
        <span>Tags: </span>
        {tags.map((tag, index) => (
          <TagItem
            key={tag.id}
            tag={tag.name}
            isLast={index === tags.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default PostCard;
