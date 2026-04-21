import axios from 'axios';
import { getStore } from '@/plugins/store/storeRegistry.js'
import { refreshTokenUser } from '@/plugins/store/slices/authThunks.js';
// import { store } from '@/plugins/store/index.js';



const axiosIns = axios.create({
  baseURL: 'http://localhost:8000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});


let token = null;
export const setAuthToken = (newToken) => {
  token = newToken;
};

axiosIns.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`;
  console.log(token)
  return config;
});

// axiosIns.interceptors.response.use(
//   (res) => {
//     console.log('res', res)
//     return res
//   },
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       console.log(240000000000000001)
//       let store = getStore()
//       try {
//         console.log('refresh token before')
//         await refreshTokenUser()
//         console.log('refresh token after')
//         return axiosIns(originalRequest);  // retry once ✅
//       } catch {
//         resetAuth()
//         return Promise.reject(error);
//       }
//     }

//     return Promise.reject(error);
//   }
// );
axiosIns.interceptors.response.use(
  (res) => {
    console.log('res', res)
    return res
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      console.log(240000000000000001)
      let store = getStore()
      try {
        console.log('refresh token before')
        await store.dispatch(refreshTokenUser())
        console.log('refresh token after')
        return axiosIns(originalRequest);  // retry once ✅
      } catch {
        store.dispatch(resetAuth())
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosIns;