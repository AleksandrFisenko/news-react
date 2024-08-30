import { useAppDispatch } from "../../hooks/typedHooks";
import { modalOpen } from "../../redux/actions/creators/modalActionCreators";
import Logo from "../Logo";

import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useAppDispatch();
  const openRegistration = () => {
    dispatch(modalOpen("register"))
  }

  const openLogin = () => {
    dispatch(modalOpen("login"))
  }

  return (
    <header className={classes.header}>
      <div className={classes.header__firstContainer}>
        <Logo />
      </div>
      <div className={classes.header__auth}>
          <button className={classes.header__button} onClick={openRegistration}>sign up</button>
          <button className={classes.header__button} onClick={openLogin}>sign in</button>
        </div>
    </header>
  );
};

export default Header;
