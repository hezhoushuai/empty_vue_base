import axios from 'axios'
import resetAxiosRequestMethod from '@/utils/resetAxios'

const baseURL = process.env.NODE_ENV === 'development' ? '/api' : '/'
// 重写axios请求方法
resetAxiosRequestMethod(axios)
const ajax = axios.create({
  baseURL,
  timeout: 5000
})

// ajax拦截器
ajax.interceptors.request.use(config => {
  return config
})

// 数据响应时拦截
ajax.interceptors.response.use(resp => {
  // 关闭loading
  return resp
})

export default ajax
