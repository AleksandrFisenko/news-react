import { useEffect } from "react";

import PostList from "../../components/PostList";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { fetchPosts } from "../../redux/actions/creators/posts";
import { useAppDispatch, useAppSelector } from "../../hooks/typedHooks";

import classes from "./MainPage.module.css";

const MainPage = () => {
  const posts = useAppSelector((state) => state.posts.postList);
  const isLoading = useAppSelector((state) => state.posts.isLoading);
  const error = useAppSelector((state) => state.posts.error);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loading />}
      {error && <Error message={error} />}
      {!posts.length && !isLoading && <p className={classes.empty}>Постов нет.</p>}
      <PostList posts={posts} />
    </>
  );
};

export default MainPage;
