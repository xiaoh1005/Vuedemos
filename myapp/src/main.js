import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Home from './components/Home.vue'
import About from './components/About.vue'



Vue.config.productionTip = false

new Vue({
  router,
 // store,
  render: h => h(App),
}).$mount('#app')
