import { useAppDispatch } from "../../hooks/typedHooks";
import { modalOpen } from "../../redux/actions/creators/modalActionCreators";
import classes from "./AuthButtons.module.css";

const AuthButtons = () => {
  const dispatch = useAppDispatch();
  const openRegistration = () => {
    dispatch(modalOpen("register"));
  };
  const openLogin = () => {
    dispatch(modalOpen("login"));
  };

  return (
    <div className={classes.auth}>
      <button className={classes.auth__button} onClick={openRegistration}>
        sign up
      </button>
      <button className={classes.auth__button} onClick={openLogin}>
        sign in
      </button>
    </div>
  );
};

export default AuthButtons;
