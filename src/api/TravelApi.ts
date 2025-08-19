import axiosWithToken from "./config/axiosConfing";


export const TravelApi = {
//   getDestinations: async () => {
//     const response = await fetch(`${(import.meta as any).env.VITE_BACKEND_API_URL}/travel/destinations`);
//     return response.json();
//   },
//   getTravelDetails: async (id) => {
//     const response = await fetch(`${(import.meta as any).env.VITE_BACKEND_API_URL}/travel/details/${id}`);
//     return response.json();
//   },
//   bookTravel: async (data) => {
//     const response = await fetch(`${(import.meta as any).env.VITE_BACKEND_API_URL}/travel/book`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     return response.json();
//   },


  addTravel: async (data) => {
    const response = await axiosWithToken.post(`${(import.meta as any).env.VITE_BACKEND_API_URL}/travel/add`, data);
    return response.data;
  },
};
