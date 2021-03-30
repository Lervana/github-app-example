import React, { FC } from "react";

import styles from "./Avatar.module.scss";

const AVATARS_URL = "https://eu.ui-avatars.com/api/?name=";

interface UserDescriptionProps {
  imgSrc: string | undefined | null;
  name: string | undefined | null;
}

const Avatar: FC<UserDescriptionProps> = ({ imgSrc, name }) => {
  const imagSrc =
    imgSrc ||
    `${AVATARS_URL}https://eu.ui-avatars.com/api/?name=${
      name || "no name" // :)
    }`;

  return (
    <div
      className={styles.Container}
      style={{ backgroundImage: `url(${imagSrc})` }}
    />
  );
};

export default Avatar;
