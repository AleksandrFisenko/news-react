import { useState } from "react";

import { Tag } from "../../types/types";

import classes from "./PostCard.module.css";

interface PostProps {
  image_url: string | null;
  email: string;
  avatar_url: string | null;
  updatedAt: string;
  title: string;
  text: string;
  tags: Tag[];
}

const PostCard = ({
  image_url,
  email,
  avatar_url,
  updatedAt,
  title,
  text,
  tags,
}: PostProps) => {
  const [details, setDetails] = useState(false);

  const changeDetails = () => {
    setDetails((prevDetails) => !prevDetails);
  };

  const cardTextClasses = details
    ? classes.card__text
    : classes.card__text + " " + classes.card__text_hidden;

  const postImage = image_url !== null 
  ? image_url 
  : "./src/images/ibs.png";

  const userAvatar = avatar_url !== null 
  ? avatar_url 
  : "./src/images/avatar.png";

  return (
    <div className={classes.card}>
      <div className={classes.card__main}>
        <img src={postImage} alt="Post image" className={classes.card__image} />
        <div className={classes.card__texts}>
          <div className={classes.card__author}>
            <img
              src={userAvatar}
              alt="User Avatar"
              className={classes.card__avatar}
            />
            <p className={classes.card__email}>{email}</p>
          </div>
          <p className={classes.card__date}>{updatedAt} </p>
          <p className={classes.card__title}>{title}</p>
          <p className={cardTextClasses} onClick={changeDetails}>
            {text}
          </p>
        </div>
      </div>
      <div className={classes.card__tags}>
        <span>Tags: </span>
        {tags.map((tag, index, arr) => {
          return (
            <span key={tag.id}>
              {tag.name + (index === arr.length - 1 ? "." : ",")}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default PostCard;
