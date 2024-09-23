import { useState } from "react";

import placeholderAvatar from "../../images/avatar.png";
import { formatDate } from "../../utils/dateUtils";

import classes from "./UserInfo.module.css";

interface UserInfoProps {
  email: string;
  login: string;
  avatarUrl: string | null;
  createdAt: string;
}

const UserInfo = ({ email, login, avatarUrl, createdAt }: UserInfoProps) => {
  const [isUserVisible, setUserVisible] = useState(true);

  const changeVisible = () => {
    setUserVisible((prev) => !prev);
  };

  return (
    <>
      <p onClick={changeVisible} className={classes.title}>
        Информация о пользователе.
      </p>
      {isUserVisible && (
        <div className={classes.container}>
          <img
            src={avatarUrl ?? placeholderAvatar}
            alt="User Avatar"
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
