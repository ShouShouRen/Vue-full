import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Find from '../src/views/Find.vue'
import My from '../src/views/My.vue'
import Friend from '../src/views/Friend.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    { path: '/find', component: Find },
    { path: '/my', component: My },
    { path: '/friend', component: Friend },
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
