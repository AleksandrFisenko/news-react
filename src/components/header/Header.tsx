import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__firstContainer}>
        <img
          src="./src/images/cat.svg"
          alt="Website Logo"
          className={classes.header__logo}
        />
        <p className={classes.header__title}>NEWS</p>
      </div>
    </header>
  );
};

export default Header;
