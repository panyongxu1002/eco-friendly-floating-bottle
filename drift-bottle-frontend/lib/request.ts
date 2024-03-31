import axios from "axios";

const hbRequest = axios.create({
  baseURL: "https://api.huobi.pro",
  headers: {
    "Content-Type": "application/json",
  },
});

hbRequest.interceptors.request.use(
  request => {
    // request.headers.Authorization = `Bearer ${shared.getAccessToken()}`;
    return request;
  },
  // eslint-disable-next-line arrow-body-style
  err => {
    return Promise.reject(err);
  },
);

hbRequest.interceptors.response.use(
  (response) => {
    // 响应拦截器
    if (response.status >= 200 || response.status < 300) {
      const res = response.data;
      if (res.status === 'ok') {
        return Promise.resolve(res);
      }
      // 这样很完美 抛出的错误通过react query error 捕获 不需要单独写另外的判断了
      return Promise.reject(response?.data || '错误');
    }
    return Promise.reject(response?.data || '请求错误');
  },
  (error) => {
    // 响应错误拦截器
    // 网络错误没有response 直接返回error
    return Promise.reject(error?.response?.data ?? error);
  }
);

export { hbRequest }