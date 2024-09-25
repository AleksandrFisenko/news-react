import { useState } from "react";

import { formatDate } from "../../utils/dateUtils";
import Avatar from "../Avatar";

import classes from "./UserInfo.module.css";

interface UserInfoProps {
  email: string;
  login: string;
  avatarUrl: string | null;
  createdAt: string;
}

const UserInfo = ({ email, login, avatarUrl, createdAt }: UserInfoProps) => {
  const [isUserVisible, setIsUserVisible] = useState(true);

  const changeVisibility = () => {
    setIsUserVisible((prev) => !prev);
  };

  return (
    <>
      <p onClick={changeVisibility} className={classes.title}>
        Информация о пользователе.
      </p>
      {isUserVisible && (
        <div className={classes.container}>
          <Avatar
            avatarUrl={avatarUrl}
            className={classes.avatar}
          />
          <div className={classes.info}>
            <p>Email: {email}</p>
            <p>Login: {login}</p>
            <p>На сайте с: {formatDate(createdAt)}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default UserInfo;
