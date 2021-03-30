import React, { FC } from "react";

import styles from "./SearchBar.module.scss";
import Button from "../Button";

interface SearchBarProps {
  onSearch: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <div className={styles.Container}>
      <input className={styles.Input} placeholder="Search for users" />
      <Button text="Search" onClick={onSearch} />
    </div>
  );
};

export default SearchBar;
