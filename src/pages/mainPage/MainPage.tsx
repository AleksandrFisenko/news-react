import Header from "../../components/header/Header";
import TaskList from "../../components/taskList/TaskList";
import Loading from "../../components/loading/Loading";
import { usePosts } from "../../hooks/posts";

const MainPage = () => {
  const { posts, loading, error } = usePosts();

  return (
    <>
      <Header />
      {loading && <Loading />}
      <TaskList posts={posts} />
    </>
  );
};

export default MainPage;
