import React, { FC, useState } from "react";

import SearchBar from "components/SearchBar";
import UserDetails from "components/UserDetails";
import { getUserDetails, getUserRepos } from "services/github-service";
import ResponseType from "types/Response.type";
import UserDetailsType from "types/UserDetails.type";

const LandingPage: FC = () => {
  const [username, setUsername] = useState<string>();
  const [userDetailsResponse, setUserDetailsResponse] = useState<
    ResponseType<UserDetailsType>
  >();

  const onSearch = async (value: string) => {
    const result = await getUserDetails(value);
    setUserDetailsResponse(result);

    if (result.status === 200) {
      console.log("getrepos");
    }
  };

  return (
    <div>
      <SearchBar onSearch={onSearch} onChange={setUsername} />
      <UserDetails
        username={username}
        userDetailsResponse={userDetailsResponse}
      />
    </div>
  );
};
export default LandingPage;
