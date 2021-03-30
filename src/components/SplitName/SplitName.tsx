import React, { FC } from "react";

import styles from "./SplitName.module.scss";

interface SplitNameProps {
  name: string | undefined | null;
  username: string | undefined | null;
}

const SplitName: FC<SplitNameProps> = ({ name, username }) => {
  const toSplit = name || username || "";
  const nameSplit = toSplit?.split(" ") || [];

  return (
    <div className={styles.Container}>
      {nameSplit.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};
export default SplitName;
