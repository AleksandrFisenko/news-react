import { Post } from "../../models";
import "./TaskCard.css";

interface PostProps {
  post: Post;
}

export default function TaskCard({ post }: PostProps) {
  return (
    <div className="card-container__card card">
      <div className="card__main">
        <img
          src={
            post.image_url !== null ? post.image_url : "./src/images/ibs.png"
          }
          alt="Website Logo"
          className="card__image"
        />
        <div className="card__texts">
          <p className="card__author">{post.user.login}</p>
          <p className="card__date">{post.updatedAt} </p>
          <p className="card__title">{post.title}</p>
          <p className="card__text">{post.text}</p>
        </div>
      </div>
      <div className="card__tags">
        <span>Tags: </span>
        {post.tags.map((tag, index, arr) => {
          return (
            <span>{tag.name + (index === arr.length - 1 ? "." : ",")}</span>
          );
        })}
      </div>
    </div>
  );
}
