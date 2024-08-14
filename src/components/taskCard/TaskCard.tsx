import { useState } from "react";
import { Tag } from "../../types/types";
import classes from "./TaskCard.module.css";

interface PostProps {
  image_url: string | null;
  email: string;
  updatedAt: string;
  title: string;
  text: string;
  tags: Tag[];
}

export default function TaskCard({
  image_url,
  email,
  updatedAt,
  title,
  text,
  tags,
}: PostProps) {
  const [details, setDetails] = useState(false);

  const changeDetails = () => {
    setDetails((prevDetails) => !prevDetails);
  };

  const cardTextClasses = details
    ? classes.card__text
    : (classes.card__text + ' ' + classes.card__text_hidden);

  return (
    <div className={classes.card}>
      <div className={classes.card__main}>
        <img
          src={image_url !== null ? image_url : "./src/images/ibs.png"}
          alt="Website Logo"
          className={classes.card__image}
        />
        <div className={classes.card__texts}>
          <p className={classes.card__author}>{email}</p>
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
}
