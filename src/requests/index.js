import axios from 'axios'

export const ajax = axios.create()

//  请求全局拦截
ajax.interceptors.request.use(config => {
  return config
})

// 全局拦截响应
ajax.interceptors.response.use(res => {
  return res
})