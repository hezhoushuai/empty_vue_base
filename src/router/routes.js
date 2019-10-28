const Home = () => import('@/views/Home')

export default [{
  name: 'home',
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  name: 'Home',
  components: {
    default: Home
  }
}]
