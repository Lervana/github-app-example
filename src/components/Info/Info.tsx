import React, { FC } from "react";

import styles from "./Info.module.scss";

interface InfoProps {
  text: string;
}

const Info: FC<InfoProps> = ({ text }) => {
  return (
    <div className={styles.Container}>
      <span>{text}</span>
    </div>
  );
};

export default Info;
