import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import movieSubject from './component/movie_subject.vue'
require('./css/base.css');
require('./css/movie.css');
require('./css/mixed_static.css');
require('./css/subject_movie.css');
Vue.use(VueRouter)
Vue.use(VueResource)
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  //添加路由
  routes: [
  	{ path: '/movieSubject', component: movieSubject}
  ]
})
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
