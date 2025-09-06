import { API_ENDPOINTS } from "../endpoints";
import type { Travel } from "../../models/Travel.model";
import axiosWithToken from "../config/axiosConfing";

interface ResponseProps<T> {
  statusCode: number;
  data: T;
  message: string;
}

export const travelService = {
  getAll: async () => {
    const response = await axiosWithToken.get<ResponseProps<Travel[]>>(
      API_ENDPOINTS.TRAVELS.LIST
    );

    return response.data;
  },

  create: async (data: Omit<Travel, "id">) => {
    console.log(data);

    const response = await axiosWithToken.post<ResponseProps<Travel>>(
      API_ENDPOINTS.TRAVELS.CREATE,
      data
    );
    console.log(response);

    return response.data;
  },

  get: async (id: number) => {
    const response = await axiosWithToken.get<ResponseProps<Travel>>(
      API_ENDPOINTS.TRAVELS.GET(id)
    );
    return response.data;
  },

  searchTravels: async (data: Partial<Travel>) => {
    const response = await axiosWithToken.post<ResponseProps<Travel[]>>(
      API_ENDPOINTS.TRAVELS.SEARCH(),
      data
    );
    return response.data;
  },

  getByOwner: async () => {
    const response = await axiosWithToken.get<ResponseProps<Travel[]>>(
      API_ENDPOINTS.TRAVELS.GET_OWNER()
    );
    return response.data;
  },
};
