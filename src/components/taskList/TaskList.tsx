import TaskCard from "../../components/taskCard/TaskCard";
import { Post } from "../../types/types";
import classes from "./TaskList.module.css";

interface PostsProps {
  posts: Post[];
}

export default function TaskList({ posts }: PostsProps) {
  return (
    <div className={classes.cardContainer}>
      {posts.map((post) => {
        return (
          <TaskCard
            key={post.id}
            image_url={post.image_url}
            email={post.user.email}
            updatedAt={post.updatedAt}
            title={post.title}
            text={post.text}
            tags={post.tags}
          />
        );
      })}
    </div>
  );
}
