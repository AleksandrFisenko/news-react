import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/typedHooks";
import { fetchAuthProfile } from "../../redux/actions/creators/authActionCreators";
import AuthButtons from "../AuthButtons";
import AuthUser from "../AuthUser";
import Logo from "../Logo";

import classes from "./Header.module.css";

const Header = () => {
  const authData = useAppSelector((state) => state.auth.userData);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchAuthProfile());
    }
  }, []);

  return (
    <header className={classes.header}>
      <div className={classes.header__firstContainer}>
        <Logo />
      </div>
      {!authData && <AuthButtons />}
      {authData && <AuthUser avatarUrl={authData.avatarUrl} />}
    </header>
  );
};

export default Header;
