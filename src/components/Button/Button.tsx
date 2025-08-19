import css from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  type = "button",
  children,
  onClick,
  disabled = false,
  className,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${css.button} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
