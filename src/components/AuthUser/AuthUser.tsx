import { useAppDispatch } from "../../hooks/typedHooks";
import placeholderAvatar from "../../images/avatar.png";
import { outAuth } from "../../redux/actions/creators/authActionCreators";

import classes from "./AuthUser.module.css";

interface AuthUserProps {
  avatarUrl: string | null;
}

const AuthUser = ({ avatarUrl }: AuthUserProps) => {
  const dispatch = useAppDispatch();
  const signOut = () => {
    localStorage.removeItem("token");
    dispatch(outAuth());
  };

  return (
    <div className={classes.auth}>
      <img
        src={avatarUrl ?? placeholderAvatar}
        alt="User Avatar"
        className={classes.auth__avatar}
      />
      <button className={classes.auth__button} onClick={signOut}>
        sign out
      </button>
    </div>
  );
};

export default AuthUser;
