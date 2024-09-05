import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/typedHooks";
import { fetchAuthProfile, outAuth } from "../../redux/actions/creators/auth";
import placeholderAvatar from "../../images/avatar.png";
import Logo from "../Logo";
import { modalOpen } from "../../redux/actions/creators/modal";
import { TOKEN } from "../../constants/keys";
import { selectAuthData } from "../../redux/selectors/auth";
import {
  MODAL_TYPE_LOGIN,
  MODAL_TYPE_REGISTRATION,
} from "../../redux/actions/constants";

import classes from "./Header.module.css";

const Header = () => {
  const authData = useAppSelector(selectAuthData);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem(TOKEN);
    if (token) {
      dispatch(fetchAuthProfile());
    }
  }, []);

  const openRegistration = () => {
    dispatch(modalOpen(MODAL_TYPE_REGISTRATION));
  };

  const openLogin = () => {
    dispatch(modalOpen(MODAL_TYPE_LOGIN));
  };

  const signOut = () => {
    dispatch(outAuth());
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__firstContainer}>
        <Logo />
      </div>
      <div className={classes.auth}>
        {authData ? (
          <>
            <img
              src={authData.avatarUrl ?? placeholderAvatar}
              alt="User Avatar"
              className={classes.auth__avatar}
            />
            <button className={classes.auth__button} onClick={signOut}>
              sign out
            </button>
          </>
        ) : (
          <>
            <button className={classes.auth__button} onClick={openRegistration}>
              sign up
            </button>
            <button className={classes.auth__button} onClick={openLogin}>
              sign in
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
