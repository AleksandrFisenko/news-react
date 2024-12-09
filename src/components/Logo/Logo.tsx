import diceLogo from '../../images/dice.svg';

import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <>
      <img
        src={diceLogo}
        alt="Website Logo"
        loading="lazy"
        className={classes.logo}
      />
      <p className={classes.title}>DND NEWS</p>
    </>
  );
};

export default Logo;
