import UserDetailsResponseType from "./UserDetailsResponse.type";
import { AxiosResponse } from "axios";

type ResponseType = {
  status: number;
  response?: AxiosResponse<UserDetailsResponseType>;
  error?: string;
};

export default ResponseType;
