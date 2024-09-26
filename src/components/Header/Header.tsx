import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/typedHooks";
import { fetchAuthProfile, outAuth } from "../../redux/actions/creators/auth";
import Logo from "../Logo";
import { modalOpen } from "../../redux/actions/creators/modal";
import { selectAuthData } from "../../redux/selectors/auth";
import {
  MODAL_TYPE_LOGIN,
  MODAL_TYPE_REGISTRATION,
} from "../../redux/actions/constants";
import { getToken } from "../../helpers/storage";
import Avatar from "../Avatar";

import classes from "./Header.module.css";

const Header = () => {
  const authData = useAppSelector(selectAuthData);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = getToken();
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
      <NavLink to={"/"} className={classes.header__firstContainer}>
        <Logo />
      </NavLink>
      <div className={classes.auth}>
        {authData ? (
          <>
            <NavLink to={`/users/${authData.id}`} className={classes.ref}>
              <Avatar
                avatarUrl={authData.avatarUrl}
                className={classes.auth__avatar}
              />
            </NavLink>
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
