import React, { ChangeEvent, FC, useState } from "react";
import cx from "classnames";

import styles from "./SearchBar.module.scss";
import Button from "../Button";

interface SearchBarProps {
  onSearch: (value: string) => void;
  onChange: (value: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch, onChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Field}>
        <input
          className={styles.Input}
          placeholder="Search for users"
          onChange={onInputChange}
        />
        {error && (
          <span className={cx("error-text", styles.Error)}>{error}</span>
        )}
      </div>
      <Button
        text="Search"
        onClick={() => {
          if (inputValue && inputValue.length > 0) {
            setError("");
            onSearch(inputValue);
          } else setError("Please enter username");
        }}
      />
    </div>
  );
};

export default SearchBar;
