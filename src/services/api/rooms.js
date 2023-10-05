import { f2eAxios } from '../axiosInstance';

export const FETCH_ROOMS = {
  hotelRooms: () => f2eAxios.get('/thef2e2019/stage6/rooms'),
  roomInfo: (roomID) => f2eAxios.get(`/thef2e2019/stage6/room/${roomID}`),
};
