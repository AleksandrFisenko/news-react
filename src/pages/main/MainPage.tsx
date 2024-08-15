import Header from "../../components/header/Header";
import PostList from "../../components/postList/PostList";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
import { usePosts } from "../../redux/api/getPosts"; 

const MainPage = () => {
  const { posts, loading, error } = usePosts();

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
