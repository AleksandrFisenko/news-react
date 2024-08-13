import TaskCard from "../../components/taskCard/TaskCard";
import { Post } from "../../models";

interface PostsProps {
  posts: Post[];
}

export default function TaskList({ posts }: PostsProps) {
  return (
    <div className="card-container">
      {posts.map((post) => {
        return <TaskCard key={post.id} post={post} />;
      })}
    </div>
  );
}
