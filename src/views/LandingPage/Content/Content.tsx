import React, { FC, Fragment } from "react";

import Info from "components/Info";
import Loader from "components/Loader";
import UserDescription from "components/UserDescription";
import UserRepos from "components/UserRepos";
import ResponseType from "types/Response.type";
import UserDetailsType from "types/UserDetails.type";
import UserReposType from "types/UserRepos.type";

import styles from "./Content.module.scss";

const getContent = (
  username: string | undefined,
  status: number,
  userDetailsResponse: ResponseType<UserDetailsType> | undefined,
  userReposResponse: ResponseType<UserReposType> | undefined
) => {
  switch (status) {
    case -1:
      return <Info text="No content" />;
    case 200:
      return (
        <Fragment>
          <UserDescription
            username={username}
            userDetails={userDetailsResponse?.response?.data}
          />
          <UserRepos
            username={username}
            userReposResponse={userReposResponse}
          />
        </Fragment>
      );
    case 404:
      return <Info text="User not found" />;
    default: {
      if (process.env.NODE_ENV === "development")
        console.error(userDetailsResponse?.error);
      return <Info text={`Cannot fetch data - status ${status.toString()}`} />;
    }
  }
};

interface ContentProps {
  username: string | undefined;
  userDetailsResponse: ResponseType<UserDetailsType> | undefined;
  userReposResponse: ResponseType<UserReposType> | undefined;
  isFetching: boolean;
}

const Content: FC<ContentProps> = ({
  username,
  userDetailsResponse,
  userReposResponse,
  isFetching,
}) => {
  const status = !userDetailsResponse ? -1 : userDetailsResponse.status;
  return (
    <div className={styles.Container}>
      {isFetching ? (
        <Loader />
      ) : (
        getContent(username, status, userDetailsResponse, userReposResponse)
      )}
    </div>
  );
};
export default Content;
