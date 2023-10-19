const config: {
  baseUrl: string
  resultCode: number | string
  defaultHeaders: | 'application/json'
  | 'application/x-www-form-urlencoded'
  | 'multipart/form-data'
  requestTimeout: number
} = {
  /**
   * api请求基础路径
   */
  // baseUrl: import.meta.env.VITE_BASE_URL + import.meta.env.VITE_API_URL,
  baseUrl: '/',
  /**
   * 接口成功返回状态码
   */
  resultCode: 200,

  /**
   * 接口请求超时时间
   */
  requestTimeout: 6 * 1000,

  /**
   * 默认接口请求类型
   * 可选值：application/x-www-form-urlencoded multipart/form-data
   */
  defaultHeaders: 'application/json',
}

export { config }
