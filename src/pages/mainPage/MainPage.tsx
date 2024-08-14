import Header from "../../components/header/Header";
import TaskList from "../../components/taskList/TaskList";
import "./MainPage.css";
import Loading from "../../components/loading/Loading";
import { usePosts } from "../../hooks/posts";

export default function MainPage() {
  const { posts, loading, error } = usePosts();

  return (
    <>
      <Header />
      {loading && <Loading />}
      <TaskList posts={posts} />
    </>
  );
}
