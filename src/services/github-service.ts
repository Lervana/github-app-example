import axios from "axios";

const BASE_URL = "https://api.github.com";

export const getUserDetails = async (username: string) => {
  try {
    const result = await axios.get(`${BASE_URL}/users/${username}`);
    return [result, null];
  } catch (err) {
    return [null, err];
  }
};
