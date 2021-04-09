import React, { FC, useState, useEffect } from "react";
import { debounce } from "ts-debounce";

import SearchBar from "components/SearchBar";
import { getUserDetails, getUserRepos } from "services/github-service";
import ResponseType from "types/Response.type";
import UserDetailsType from "types/UserDetails.type";
import UserReposType from "types/UserRepos.type";
import Content from "./Content";

import styles from "./LandingPage.module.scss";

const LandingPage: FC = () => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [username, setUsername] = useState<string>();
  const [userDetailsResponse, setUserDetailsResponse] = useState<
    ResponseType<UserDetailsType>
  >();
  const [userReposResponse, setUserReposResponse] = useState<
    ResponseType<UserReposType>
  >();

  const onSearch = async (value: string) => {
    setIsFetching(true);
    const result = await getUserDetails(value);
    setUserDetailsResponse(result);

    if (result.status === 200) {
      const reposResult = await getUserRepos(value);
      setUserReposResponse(reposResult);
    }

    setIsFetching(false);
  };

  const debouncedOnChange = debounce((username: string) => {
    setUsername(username);
    onSearch(username);
  }, 400);

  useEffect(() => () => debouncedOnChange.cancel(), []);

  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <SearchBar
          onSearch={onSearch}
          onChange={(username) => debouncedOnChange(username)}
        />
        <Content
          username={username}
          userDetailsResponse={userDetailsResponse}
          userReposResponse={userReposResponse}
          isFetching={isFetching}
        />
      </div>
    </div>
  );
};
export default LandingPage;
