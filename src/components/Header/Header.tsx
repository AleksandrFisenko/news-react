import Logo from "../Logo";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__firstContainer}>
        <Logo />
      </div>
    </header>
  );
};

export default Header;
