import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/typedHooks";
import { fetchUserPage } from "../../redux/actions/creators/user";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

import classes from "./UserPage.module.css";

const UserPage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUserPage(Number(id)));
  }, []);

  const data = useAppSelector((state) => state.userPage.userPage);
  const isLoading = useAppSelector((state) => state.userPage.isLoading);
  const error = useAppSelector((state) => state.userPage.error);

  console.log(data)
  console.log(isLoading)
  console.log(error)

  return (
    <>
      <p>{id}</p>
      {isLoading && <Loading />}
      {error && <Error message={error} />}
    </>
  );
};

export default UserPage;
