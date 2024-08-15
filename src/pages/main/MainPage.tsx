import Header from "../../components/header/Header";
import PostList from "../../components/postList/PostList";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const MainPage = () => {
  const { posts, loading, error } = useTypedSelector((state) => state.posts);
  console.log(posts);

  return (
    <>
      <Header />
      {loading && <Loading />}
      {error && <Error message={error} />}
      <PostList posts={posts} />
    </>
  );
};

export default MainPage;
