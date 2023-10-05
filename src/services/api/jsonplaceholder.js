import { jsonpAxios } from '../axiosInstance';

export const FETCH_USER = {
  userList: () => jsonpAxios.get('/posts'),
  userInfo: (employeeID) => jsonpAxios.get(`/posts/${employeeID}`),
  addUser: () => jsonpAxios.post('/posts'),
  updated: (employeeID) => jsonpAxios.put(`/posts/${employeeID}`),
  updatedTitle: (employeeID) => jsonpAxios.patch(`/posts/${employeeID}`),
  delUser: (employeeID) => jsonpAxios.delete(`/posts/${employeeID}`),
};
