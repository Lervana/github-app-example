import axios from "axios";

import ResponseType from "types/Response.type";
import UserDetailsType from "../types/UserDetails.type";

const BASE_URL = "https://api.github.com";

const getRequest = async (
  uri: string
): Promise<ResponseType<UserDetailsType>> => {
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
};

export const getUserDetails = async (
  username: string
): Promise<ResponseType<UserDetailsType>> => getRequest(`users/${username}`);

export const getUserRepos = async (
  username: string
): Promise<ResponseType<UserDetailsType>> =>
  getRequest(`users/${username}/repos`);
