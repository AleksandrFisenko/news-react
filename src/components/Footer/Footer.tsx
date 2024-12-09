import { useAppDispatch } from "../../hooks/typedHooks";
import { modalOpen } from "../../redux/actions/creators/modal";
import {
  MODAL_TYPE_POST_CREATE,
} from "../../redux/actions/constants";

import classes from "./Footer.module.css";

const Footer = () => {
  const dispatch = useAppDispatch();

  const openPostCreate = () => {
    dispatch(modalOpen(MODAL_TYPE_POST_CREATE));
  };

  return (
    <footer className={classes.footer}>
      <button onClick={openPostCreate} className={classes.add}>+</button>
    </footer>
  );
};

export default Footer;
