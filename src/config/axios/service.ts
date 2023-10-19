import type { AxiosError } from 'axios'
import axios from 'axios'
import { config } from '@/config/axios/config'

const service = axios.create({
  baseURL: config.baseUrl, // api 的 base_url
  timeout: config.requestTimeout, // 请求超时时间
  withCredentials: false, // 禁用 Cookie 等信息
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 返回状态判断(添加响应拦截器)
service.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

export { service }
