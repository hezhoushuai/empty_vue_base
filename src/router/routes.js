const Home = () => import('@/views/Home')

export default [{
  path: '/',
  redirect: 'home'
}, {
  name: 'home',
  path: '/home',
  components: {
    default: Home
  }
}]
