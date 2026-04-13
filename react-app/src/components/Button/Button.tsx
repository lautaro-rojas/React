import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  isLoading?: boolean;
  onClick?: () => void;
};

function Button({ children, isLoading, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      className={[styles.button, styles.padded].join(" ")}
      //className={"btn btn-" + (isLoading ? "secondary" : "primary")}
      disabled={isLoading}
      onClick={onClick}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}
export default Button;
