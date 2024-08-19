import Logo from "../logo/Logo";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__firstContainer}>
        <Logo />
        <p className={classes.header__title}>NEWS</p>
      </div>
    </header>
  );
};

export default Header;
