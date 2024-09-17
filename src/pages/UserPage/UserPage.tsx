import { useParams } from "react-router-dom";

import classes from "./UserPage.module.css";

const UserPage = () => {
  const { id } = useParams();

  return (
    <>
      <p>{id}</p>
    </>
  );
};

export default UserPage;
