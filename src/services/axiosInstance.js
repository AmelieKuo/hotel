import axios from 'axios';

const axiosInstance = (sourceApi) => {
  /**
   * request 請求攔截器
   * @function
   * @param {Object} config - 請求配置
   * @returns {Object} 修改後的請求配置
   * @throws {Error} 請求錯誤
   */
  sourceApi.interceptors.request.use(
    (config) => config,
    (error) => {
      console.log(`請求錯誤: ${error.message}`);
      return Promise.reject(error);
    },
  );

  /**
   * response 回應攔截器
   * @function
   * @param {Object} config 回應配置
   * @returns {Object} 修改後的回應配置
   * @throws {Error} 回應錯誤
   * */
  sourceApi.interceptors.response.use((response) => {
    const { status, data: respData = {} } = response;
    if (status === 200 || status === 201) {
      return {
        respData,
      };
    }
    console.log(`回應錯誤: ${status}`);

    return Promise.reject(response);
  }, (error) => Promise.reject(error));
};

/** @const 六角學院 Token */
const AUTH_TOKEN = 'FCe1QhjCRfOAt7La4Xtco4NBPyqeQMQoc1oDgqv18PY21YWGHHEWZt4u7Tj7';
// const AUTH_TOKEN = 'FCe1QhjC';

/** @const 六角學院 Api 實例 */
const f2eAxios = axios.create({
  baseURL: 'https://challenge.thef2e.com/api/',
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
});

/** @const jsonplaceholder Api 實例 */
const jsonpAxios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    Accept: 'application/json',
  },
});

axiosInstance(f2eAxios);
axiosInstance(jsonpAxios);

export { f2eAxios, jsonpAxios };
