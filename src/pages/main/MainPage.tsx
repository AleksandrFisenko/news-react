import { useEffect } from "react";

import Header from "../../components/header/Header";
import PostList from "../../components/postList/PostList";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
import { useAppDispatch, useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchPosts } from "../../redux/actions/posts";

const MainPage = () => {
  const { posts, loading, error } = useTypedSelector((state) => state.posts);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return (
      <>
        <Header />
        <Loading />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <Error message={error} />
      </>
    );
  }

  return (
    <>
      <Header />
      <PostList posts={posts} />
    </>
  );
};

export default MainPage;
