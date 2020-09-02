import ajax from './index.js'

export const getHomeData = () => ajax.get('/search?keywords=海阔天空')
