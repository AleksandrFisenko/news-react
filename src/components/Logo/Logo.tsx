import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <>
      <img
        src="./src/images/cat.svg"
        alt="Website Logo"
        className={classes.logo}
      />
      <p className={classes.title}>NEWS</p>
    </>
  );
};

export default Logo;
