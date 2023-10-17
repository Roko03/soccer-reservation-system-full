import styles from "./ButtonComponent.module.scss";

interface ButtonComponentProps {
  children: React.ReactNode;
  onClick?: () => void;
  isEnable?: boolean;
  variant: "authentication" | "add" | "profile" | "delete";
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  children,
  onClick,
  isEnable,
  variant,
}) => {
  let classStyle;
  switch (variant) {
    case "authentication":
      classStyle = styles.authentication_button;
      break;
    case "add":
      classStyle = styles.add_button;
      break;
    case "profile":
      classStyle = styles.profile_button;
      break;
    case "delete":
      classStyle = styles.delete_button;
      break;
  }

  return (
    <button
      className={`${styles.button} ${classStyle}`}
      disabled={isEnable}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
