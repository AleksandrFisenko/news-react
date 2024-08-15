import PostCard from "../postCard/PostCard";
import { Post } from "../../types/types";

import classes from "./TaskList.module.css";

interface PostsProps {
  posts: Post[];
}

const PostList = ({ posts }: PostsProps) => {
  return (
    <div className={classes.cardContainer}>
      {posts.map((post) => {
        return (
          <PostCard
            key={post.id}
            image_url={post.image_url}
            email={post.user.email}
            avatar_url={post.user.avatar_url}
            updatedAt={post.updatedAt}
            title={post.title}
            text={post.text}
            tags={post.tags}
          />
        );
      })}
    </div>
  );
};

export default PostList;