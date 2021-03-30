import React, { FC, Fragment } from "react";

import Info from "components/Info";
import ResponseType from "types/Response.type";
import styles from "./UserDetails.module.scss";

const getContent = (
  status: number,
  userDetailsResponse: ResponseType | undefined
) => {
  switch (status) {
    case -1:
      return <Info text="No content" />;
    case 200:
      return <Fragment>123</Fragment>;
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
  userDetailsResponse: ResponseType | undefined;
}

const UserDetails: FC<UserDetailsProps> = ({ userDetailsResponse }) => {
  const status = !userDetailsResponse ? -1 : userDetailsResponse.status;
  return (
    <div className={styles.Container}>
      {getContent(status, userDetailsResponse)}
    </div>
  );
};
export default UserDetails;
