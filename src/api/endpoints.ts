export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    GOOGLE: '/auth/google'
  },
  USERS: {
    LIST: '/user',
    GET: () => `/user/me`,
    UPDATE: () => `/user/me`
  },
  TRAVELS: {
    LIST: '/travels',
    CREATE: '/travels',
    GET_OWNER: () => `/travels/owner`,
    GET: (id: number) => `/travels/${id}`,
    SEARCH: () => `/travels/search`,
    UPDATE: (id: number) => `/travels/${id}`,
    DELETE: (id: number) => `/travels/${id}`
  },
  REQUESTS: {
    LIST: '/requests',
    CREATE: '/requests',
    GET_OWNER: () => `/requests/owner`,
    GET: (id: number) => `/requests/${id}`,
    UPDATE: (id: number) => `/requests/${id}`,
    DELETE: (id: number) => `/requests/${id}`
  }
} as const;