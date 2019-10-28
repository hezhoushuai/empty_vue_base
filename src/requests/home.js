import request from './request.js'

export const getHomeData = () => {
  return request.get('/search?keywords=海阔天空')
}
