import { service } from '@/config/axios/service'
import { config } from '@/config/axios/config'

function request(option: any) {
  const { url, method, params, data, headersType, responseType, ...others } = option
  return service({
    url,
    method,
    params,
    data,
    ...others,
    responseType,
    headers: {
      'Content-Type': headersType || config.defaultHeaders,
    },
  })
}
export default {
  get: async <T = any>(option: any) => {
    const res = await request({ method: 'GET', ...option })
    return res as unknown as T
  },
  post: async <T = any>(option: any) => {
    const res = await request({ method: 'POST', ...option })
    return res as unknown as T
  },
  postOriginal: async (option: any) => {
    const res = await request({ method: 'POST', ...option })
    return res
  },
  delete: async <T = any>(option: any) => {
    const res = await request({ method: 'DELETE', ...option })
    return res as unknown as T
  },
  put: async <T = any>(option: any) => {
    const res = await request({ method: 'PUT', ...option })
    return res as unknown as T
  },
  download: async <T = any>(option: any) => {
    const res = await request({ method: 'GET', responseType: 'blob', ...option })
    return res as unknown as Promise<T>
  },
  upload: async <T = any>(option: any) => {
    option.headersType = 'multipart/form-data'
    const res = await request({ method: 'POST', ...option })
    return res as unknown as Promise<T>
  },
}
