import { Post } from "../../types/posts";

import PostCard from "../PostCard";

import classes from "./PostList.module.css";

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {

  return (
    <div className={classes.cardContainer}>
      {posts.map((post) => {
        return (
          <PostCard
            key={post.id}
            imageUrl={post.imageUrl}
            userId={post.user.id}
            email={post.user.email}
            avatarUrl={post.user.avatarUrl}
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
