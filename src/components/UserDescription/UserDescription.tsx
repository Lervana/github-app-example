import React, { FC } from "react";

import Avatar from "components/Avatar";
import SplitName from "components/SplitName";
import UserDetailsType from "types/UserDetails.type";

import styles from "./UserDescription.module.scss";

interface UserDescriptionProps {
  username: string | undefined;
  userDetails: UserDetailsType | undefined;
}

const UserDescription: FC<UserDescriptionProps> = ({
  userDetails,
  username,
}) => (
  <div className={styles.Container}>
    <div className={styles.Header}>
      <Avatar imgSrc={userDetails?.avatar_url} name={userDetails?.name} />
      <SplitName name={userDetails?.name} username={username} />
    </div>
    <div className={styles.Description}>{userDetails?.bio}</div>
  </div>
);

export default UserDescription;
