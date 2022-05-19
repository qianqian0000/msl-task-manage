import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueX from 'vuex'

import confirmComponents from './components/common/index'
import common from './assets/js/common.js'
import 'lib-flexible'
import './assets/fonts/iconfont.css'

import Vant from 'vant'
import 'vant/lib/index.css';
import './assets/css/common.css';
// import Vconsole from 'vconsole'
Vue.use(Vant)

Vue.use(VueX)
Vue.use(confirmComponents)
Vue.prototype.common = common

// const vConsole = new Vconsole()
// Vue.use(vConsole)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
