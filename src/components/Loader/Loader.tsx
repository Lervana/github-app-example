import React, { FC } from "react";
import BounceLoader from "react-spinners/BounceLoader";

import styles from "./Loader.module.scss";

const Loader: FC = () => (
  <div className={styles.Container}>
    <BounceLoader size={60} color="#abcdaa" />
  </div>
);

export default Loader;
