import classes from "./Error.module.css";

interface ErrorProps {
  message: string;
}

const Error = ({ message }: ErrorProps) => <p className={classes.message}>{message}</p>;

export default Error;
