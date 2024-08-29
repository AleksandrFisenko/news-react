import Logo from "../Logo";

import classes from "./Header.module.css";

interface HeaderProps {
  openRegistration: React.Dispatch<React.SetStateAction<boolean>>
  openLogin: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({openRegistration, openLogin}: HeaderProps) => {
  const handleRegistrationOpen = () => openRegistration(true);
  const handleLoginOpen = () => openLogin(true);

  return (
    <header className={classes.header}>
      <div className={classes.header__firstContainer}>
        <Logo />
      </div>
      <div className={classes.header__auth}>
          <button className={classes.header__button} onClick={handleRegistrationOpen}>sign up</button>
          <button className={classes.header__button} onClick={handleLoginOpen}>sign in</button>
        </div>
    </header>
  );
};

export default Header;
