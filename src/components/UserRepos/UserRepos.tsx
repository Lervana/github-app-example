import React, { FC } from "react";
import { orderBy, filter } from "lodash";

import Info from "components/Info";
import ResponseType from "types/Response.type";
import UserReposResponse from "types/UserRepos.type";

import styles from "./UserRepos.module.scss";

interface UserReposProps {
  username: string | undefined;
  userReposResponse: ResponseType<UserReposResponse> | undefined;
}

const getFilteredRepos = (
  userReposResponse: ResponseType<UserReposResponse> | undefined,
  username: string | undefined
): UserReposResponse[] => {
  const items = userReposResponse?.response?.data || [];
  const filtered: UserReposResponse[] = filter(
    items,
    (item: UserReposResponse) => item.stargazers_count > 0
  );
  const ordered: UserReposResponse[] = orderBy(
    filtered,
    ({ stargazers_count }) => stargazers_count
  );

  return ordered.slice(0, 3);
};

const getContent = (
  username: string | undefined,
  userReposResponse: ResponseType<UserReposResponse> | undefined
) => {
  if (userReposResponse?.status !== 200)
    return <Info text={`Unable to get repositories for user ${username}`} />;

  const filteredRepos = getFilteredRepos(userReposResponse, username);

  if (filteredRepos.length === 0)
    return (
      <div className={styles.NoReposInfo}>
        <Info text={`User ${username} don't have any popular repositories`} />
      </div>
    );

  return filteredRepos.map(({ html_url, name }, index) => (
    <div className={styles.Link}>
      <a href={html_url} target="_blank" key={`repo-${index}`}>
        {name}
      </a>
    </div>
  ));
};

const UserRepos: FC<UserReposProps> = ({ username, userReposResponse }) => {
  return (
    <div className={styles.Container}>
      <div className="bold-text">Top repositories</div>
      {getContent(username, userReposResponse)}
    </div>
  );
};

export default UserRepos;
