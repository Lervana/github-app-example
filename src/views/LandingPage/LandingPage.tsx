import React, { FC, useState } from "react";

import SearchBar from "components/SearchBar";
import UserDetails from "components/UserDetails";
import { getUserDetails, getUserRepos } from "services/github-service";
import ResponseType from "types/Response.type";

const LandingPage: FC = () => {
  const [
    userDetailsResponse,
    setUserDetailsResponse,
  ] = useState<ResponseType>();

  const onSearch = async (value: string) => {
    const result = await getUserDetails(value);
    setUserDetailsResponse(result);

    if (result.status === 200) {
      console.log("getrepos");
    }
  };

  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <UserDetails userDetailsResponse={userDetailsResponse} />
    </div>
  );
};
export default LandingPage;
