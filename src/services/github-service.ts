import axios from "axios";

import ResponseType from "types/Response.type";
import UserDetailsType from "../types/UserDetails.type";
import UserReposType from "../types/UserRepos.type";

const BASE_URL = "https://api.github.com";

async function getRequest<T>(uri: string): Promise<ResponseType<T>> {
  try {
    const result = await axios.get(`${BASE_URL}/${uri}`);
    return {
      status: result.status,
      response: result,
    };
  } catch (err) {
    const responseStatus = err?.response?.status;
    return {
      status: responseStatus || 500,
      error: err?.message || "Internal error",
    };
  }
}

export const getUserDetails = async (
  username: string
): Promise<ResponseType<UserDetailsType>> =>
  getRequest<UserDetailsType>(`users/${username}`);

export const getUserRepos = async (
  username: string
): Promise<ResponseType<UserReposType>> =>
  getRequest<UserReposType>(`users/${username}/repos`);
