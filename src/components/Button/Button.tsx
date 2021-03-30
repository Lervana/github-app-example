import React, { FC } from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className={styles.Container} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
