import TaskCard from "../../components/taskCard/TaskCard";
import { Post } from "../../models";
import "./TaskList.css";

interface PostsProps {
  posts: Post[];
}

export default function TaskList({ posts }: PostsProps) {
  return (
    <div className="card-container">
      {posts.map((post) => {
        return (
          <TaskCard
            key={post.id}
            image_url={post.image_url}
            login={post.user.login}
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
