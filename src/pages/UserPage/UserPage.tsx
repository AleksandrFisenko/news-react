import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/typedHooks";
import { fetchUserPage } from "../../redux/actions/creators/userPage";
import Loading from "../../components/Loading";
import PostList from "../../components/PostList";
import {
  selectUserError,
  selectUserPageData,
  selectUserPageIsLoading,
} from "../../redux/selectors/userPage";
import UserInfo from "../../components/UserInfo";
import { selectPostsData, selectPostsError } from "../../redux/selectors/posts";
import Error from "../../components/Error";

import classes from "./UserPage.module.css";

const UserPage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUserPage(Number(id)));
  }, [id]);

  const userData = useAppSelector(selectUserPageData);
  const postsData = useAppSelector(selectPostsData);
  const isLoading = useAppSelector(selectUserPageIsLoading);
  const userError = useAppSelector(selectUserError);
  const postsError = useAppSelector(selectPostsError);

  const isPosts = !isLoading && !postsError && !postsData.length;

  const error = userError || postsError;

  return (
    <div className={classes.page}>
      {isLoading && <Loading />}
      {isPosts && (
        <p className={classes.empty}>Постов нет.</p>
      )}
      {userData && (
        <UserInfo
          email={userData.email}
          login={userData.login}
          avatarUrl={userData.avatarUrl}
          createdAt={userData.createdAt}
        />
      )}
      {error && <Error message={error} />}
      {postsData && <PostList posts={postsData} />}
    </div>
  );
};

export default UserPage;
