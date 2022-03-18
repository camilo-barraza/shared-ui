import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { handleError, handleSuccess } from "./responseHandlers";
import Qs, { IStringifyOptions } from "qs";
import { isString } from "../utils";

type SuccessCallback = (data: any) => string;
declare module "axios" {
  export interface AxiosRequestConfig {
    cache?: boolean;
    ttl?: number;
    arrayFormat?: IStringifyOptions["arrayFormat"];
    toPublicApi?: boolean;
    withReq?: boolean;
    successMsg?: string | SuccessCallback;
    errorMsg?: string;
  }
}

const api = axios.create({
  timeout: 20000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Requested-With": "XmlHttpRequest",
  },
});

const ls = typeof window !== "undefined" ? localStorage : null;

const ttlIsExpired = (ttl: string) => new Date().getTime() > parseInt(ttl);
const getCacheKeys = (config: AxiosRequestConfig) => {
  const key = `${config.method}:${config.url}`;
  const ttlKey = `${key}:TTL`;
  return { key, ttlKey };
};

const getTTL = (ttl: number | undefined): number => {
  const currentTime = new Date().getTime();
  if (ttl) return currentTime + ttl;
  const anHour = 1000 * 60 * 60;
  return currentTime + anHour * 24;
};

const requestInterceptor = {
  onFulFilled: (_config: AxiosRequestConfig) => {
    _config.paramsSerializer = (params: any) => {
      return Qs.stringify(params, {
        arrayFormat: config.arrayFormat ? config.arrayFormat : "brackets",
      });
    };

    const authToken = JSON.parse(ls?.getItem("user"))?.token;
    const config = Object.assign(_config);

    if (authToken) config.headers.Authorization = `Bearer ${authToken}`;
    if (!config.toPublicApi)
      config.url = `${process.env.REACT_APP_API_BASE_URL || ""}${config.url}`;

    if (config.cache) {
      const { key, ttlKey } = getCacheKeys(config);
      const ttl = ls?.getItem(ttlKey);
      if (config.refresh || (ttl && ttlIsExpired(ttl))) {
        ls?.removeItem(key);
        ls?.removeItem(ttlKey);
      }
      const data = ls?.getItem(key);
      if (data) {
        return {
          headers: {},
          method: config.method,
          url: `ls-cache:${config.url}`,
          cachedData: JSON.parse(data),
        };
      }
    }
    return config;
  },
  onRejected: (err: any) => {
    return Promise.reject(err);
  },
};

const responseInterceptor = {
  onFulFilled: (res: AxiosResponse): any => {
    const { config: _config } = res;
    const config: AxiosRequestConfig = Object.assign(_config);
    if (config.cache) {
      const { key, ttlKey } = getCacheKeys(config);
      ls?.setItem(ttlKey, JSON.stringify(getTTL(config.ttl)));
      ls?.setItem(key, JSON.stringify(res.data));
    }
    if (_config.successMsg && [200, 201].includes(res.status)) {
      handleSuccess(
        isString(_config.successMsg)
          ? _config.successMsg.toString()
          : (_config.successMsg as SuccessCallback)(res.data)
      );
    }
    if (config.withReq) return res;
    return res;
  },

  onRejected: (err: any) => {
    if (err?.config?.cachedData) {
      return Promise.resolve(err?.config?.cachedData);
    }
    handleError(err, err?.config?.errorMsg);
    return Promise.reject(err);
  },
};

api.interceptors.request.use(
  requestInterceptor.onFulFilled,
  requestInterceptor.onRejected
);
api.interceptors.response.use(
  responseInterceptor.onFulFilled,
  responseInterceptor.onRejected
);

export { api };
