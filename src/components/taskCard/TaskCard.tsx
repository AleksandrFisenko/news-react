import { useState } from "react";
import { Tag } from "../../models";
import "./TaskCard.css";

interface PostProps {
  image_url: string | null;
  login: string;
  updatedAt: string;
  title: string;
  text: string;
  tags: Tag[];
}

export default function TaskCard({
  image_url,
  login,
  updatedAt,
  title,
  text,
  tags,
}: PostProps) {
  const [details, setDetails] = useState(false);

  const cardTextClasses = details
    ? "card__text"
    : "card__text card__text--hidden";

  return (
    <div className="card-container__card card">
      <div className="card__main">
        <img
          src={image_url !== null ? image_url : "./src/images/ibs.png"}
          alt="Website Logo"
          className="card__image"
        />
        <div className="card__texts">
          <p className="card__author">{login}</p>
          <p className="card__date">{updatedAt} </p>
          <p className="card__title">{title}</p>
          <p
            className={cardTextClasses}
            onClick={() => setDetails((prev) => !prev)}
          >
            {text}
          </p>
        </div>
      </div>
      <div className="card__tags">
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
