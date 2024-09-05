import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <>
      <img
        src="./src/images/dice.svg"
        alt="Website Logo"
        className={classes.logo}
      />
      <p className={classes.title}>DND NEWS</p>
    </>
  );
};

export default Logo;
