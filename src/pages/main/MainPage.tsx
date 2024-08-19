import { useEffect } from "react";

import PostList from "../../components/postList/PostList";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
import { fetchPosts } from "../../redux/actions/posts";
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
      {!posts.length && <p className={classes.empty}>Постов нет.</p>}
      <PostList posts={posts} />
    </>
  );
};

export default MainPage;
