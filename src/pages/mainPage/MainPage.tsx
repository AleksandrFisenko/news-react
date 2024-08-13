import Header from "../../components/header/Header";
import TaskList from "../../components/taskList/TaskList";
import "./MainPage.css";
import { posts } from "../../data/posts";

export default function MainPage() {
  return (
    <>
      <Header />
      <TaskList posts={posts} />
    </>
  );
}
