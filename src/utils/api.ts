import axios from 'axios'
import config from './config'

const service = axios.create(config)
// POST 传参序列化
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
// 返回状态判断
service.interceptors.response.use(
  (res) => {
    return res.data
  },
  async (err) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise((resolve, reject) => {
      return Promise.reject(err)
    })
  },
)

export default service
