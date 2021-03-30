import React, { FC, Fragment } from "react";

import Info from "components/Info";
import ResponseType from "types/Response.type";
import UserDetailsType from "types/UserDetails.type";
import styles from "./UserDetails.module.scss";
import UserDescription from "../UserDescription";

const getContent = (
  username: string | undefined,
  status: number,
  userDetailsResponse: ResponseType<UserDetailsType> | undefined
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

interface UserDetailsProps {
  username: string | undefined;
  userDetailsResponse: ResponseType<UserDetailsType> | undefined;
}

const UserDetails: FC<UserDetailsProps> = ({
  username,
  userDetailsResponse,
}) => {
  const status = !userDetailsResponse ? -1 : userDetailsResponse.status;
  return (
    <div className={styles.Container}>
      {getContent(username, status, userDetailsResponse)}
    </div>
  );
};
export default UserDetails;
