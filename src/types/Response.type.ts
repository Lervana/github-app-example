import { AxiosResponse } from "axios";

type ResponseType<T> = {
  status: number;
  response?: AxiosResponse<T>;
  error?: string;
};

export default ResponseType;
