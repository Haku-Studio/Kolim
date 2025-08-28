import { API_ENDPOINTS } from "../endpoints";
import type { Travel } from "../../models/Travel.model";
import axiosWithToken from "../config/axiosConfing";
import { Request$ } from "../../models/Request.model";

interface ResponseProps<T> {
  statusCode: number;
  data: T;
  message: string;
}

export const requestService = {
  create: async (data: Omit<Request$, "id">) => {
    console.log("request data", data);

    const response = await axiosWithToken.post<ResponseProps<Request$>>(
      API_ENDPOINTS.REQUESTS.CREATE,
      data
    );
    console.log(response);

    return response.data;
  },

  getByOwner: async () => {
    const response = await axiosWithToken.get<ResponseProps<Request$[]>>(
      API_ENDPOINTS.REQUESTS.GET_OWNER()
    );
    return response.data;
  },
};
