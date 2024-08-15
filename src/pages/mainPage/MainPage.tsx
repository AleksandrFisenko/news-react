import Header from "../../components/header/Header";
import TaskList from "../../components/taskList/TaskList";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
import { usePosts } from "../../hooks/posts";

const MainPage = () => {
  const { posts, loading, error } = usePosts();

  return (
    <>
      <Header />
      {loading && <Loading />}
      {error && <Error message={error} />}
      <TaskList posts={posts} />
    </>
  );
};

export default MainPage;
