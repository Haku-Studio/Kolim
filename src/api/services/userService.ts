import { API_ENDPOINTS } from "../endpoints";
import type { User } from "../../models/User.model";
import axiosWithToken from "../config/axiosConfing";

export const userService = {
    getUserConnected: async () => {
    const response = await axiosWithToken.get<User>(
      API_ENDPOINTS.USERS.GET()
    );
    return response.data;
  },
};
