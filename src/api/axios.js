import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';
import { config } from './config';
export const PATH_URL =
  import.meta.env === 'development' ? '' : `http://${window.location.hostname}`;
// 创建axios实例
const service = axios.create({
  baseURL: PATH_URL, // api 的 base_url
  timeout: config.request_timeout // 请求超时时间
});
const { result_code } = config;
// request拦截器
service.interceptors.request.use(
  (conf) => {
    if (
      conf.method === 'post' &&
      conf.headers['Content-Type'] === 'application/x-www-form-urlencoded'
    ) {
      conf.data = qs.stringify(conf.data);
    }
    // get参数编码
    if (conf.method === 'get' && conf.params) {
      let url = conf.url;
      url += '?';
      const keys = Object.keys(conf.params);
      for (const key of keys) {
        // eslint-disable-next-line no-void
        if (conf.params[key] !== void 0 && conf.params[key] !== null) {
          url += `${key}=${encodeURIComponent(conf.params[key])}&`;
        }
      }
      url = url.substring(0, url.length - 1);
      conf.params = {};
      conf.url = url;
    }
    return conf;
  },
  (error) => {
    console.log(error); // for debug
    Promise.reject(error);
  }
);
// response 拦截器
service.interceptors.response.use(
  (response) => {
    if (response.config.responseType === 'blob') {
      // 如果是文件流，直接过
      return response;
    } else if (response.data.code === result_code) {
      return response.data;
    } else {
      Vue.prototype.$message.error(
        response.data.message ? response.data.message : JSON.stringify(response.data)
      );
      if (response.data.error === 'unauthorized' && response.data.code === 1000) {
        // clearCookie();
        // router.push({ name: 'login' });
      }
    }
  },
  (error) => {
    if (error.response?.data) {
      const errorMessage = error.response.data;
      Vue.prototype.$message.error(errorMessage.message);
      if (error.response.data.error === 'unauthorized' && error.response.data.code === 1000) {
        // setTimeout(() => {
        //   // clearCookie();
        //   // router.push({ name: 'login' });
        // }, 500);
        console.log(error.response.data);
      }
    } else {
      Vue.prototype.$message.error(error.message);
    }
    return Promise.reject(error.response?.data);
  }
);

export { service };
