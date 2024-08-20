import CatBody from "../../svg/cat/CatBody";
import CatTail from "../../svg/cat/CatTail";
import CatWall from "../../svg/cat/CatWall";

import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={classes.loader}>
      <div className={classes.wrapper}>
        <div className={classes.catContainer}>
          <CatBody />
          <CatTail />
          <div className={classes.text}>
            <span className={classes.bigzzz}>Z</span>
            <span className={classes.zzz}>Z</span>
          </div>
        </div>
        <div className={classes.wallContainer}>
          <CatWall />
        </div>
      </div>
    </div>
  );
};

export default Loading;
