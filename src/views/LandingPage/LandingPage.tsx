import React, { FC, useState } from "react";

import SearchBar from "components/SearchBar";
import { getUserDetails } from "services/github-service";
import styles from "./LandingPage.module.scss";

const LandingPage: FC = () => {
  const [currentUserDetails, setCurrentUserDetails] = useState();
  const [error, setError] = useState();

  const onSearch = async (value: string) => {
    const [result, error] = await getUserDetails(value);
    setCurrentUserDetails(result);
    setError(error);
  };

  return (
    <div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};
export default LandingPage;
