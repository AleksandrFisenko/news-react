import { useEffect } from "react";

import Header from "../../components/header/Header";
import PostList from "../../components/postList/PostList";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
import { useAppDispatch, useAppSelector } from "../../hooks/typedHooks";
import { fetchPosts } from "../../redux/actions/posts";

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
      <Header />
      {isLoading && <Loading />}
      {error && <Error message={error} />}
      <PostList posts={posts} />
    </>
  );
};

export default MainPage;
