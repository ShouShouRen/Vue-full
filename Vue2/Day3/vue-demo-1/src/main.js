// 文件和新功能:導入App.vue 基於app.vue創建結構渲染index.html
import Vue from 'vue'
import App from './App.vue'

// 當前模式
Vue.config.productionTip = false

new Vue({
  // el: '#app',
  render: h => h(App),
}).$mount('#app')
