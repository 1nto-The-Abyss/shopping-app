import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/icon/iconfont"
import "amfe-flexible"
import vant from './common/vant'
import VueLazyLoad from 'vue-lazyload'

vant()
Vue.config.productionTip = false
Vue.use(VueLazyLoad)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
