import { useEffect } from "react";

import PostList from "../../components/PostList";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { fetchPosts } from "../../redux/actions/creators/posts";
import { useAppDispatch, useAppSelector } from "../../hooks/typedHooks";
import {
  selectPostsData,
  selectPostsError,
  selectPostsIsLoading,
} from "../../redux/selectors/posts";

import classes from "./MainPage.module.css";

const MainPage = () => {
  const postsData = useAppSelector(selectPostsData);
  const isLoading = useAppSelector(selectPostsIsLoading);
  const error = useAppSelector(selectPostsError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const isPosts = !isLoading && !error && !postsData.length;

  return (
    <div className={classes.page}>
      <h1 className={classes.title}>Мои dnd новости</h1>
      {isLoading && <Loading />}
      {error && <Error message={error} />}
      {isPosts && (
        <p className={classes.empty}>Постов нет.</p>
      )}
      <PostList posts={postsData} />
    </div>
  );
};

export default MainPage;
