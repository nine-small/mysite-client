import './mock'
import App from './App.vue'
import vLoading from './directives/loading'
import vFocus from './directives/focus'
import vLazy from './directives/lazy'
import './eventBus'
import module from './api/index'
import Vue from 'vue'
// 公共仓库
import store from '@/store'
// 路由
import router from "@/router";
// 将所有的api请求方法都挂载到Vue原型上
Vue.prototype.$http = module;
Vue.config.productionTip = false
// 注册自定义指令v-loading
Vue.directive('loading',vLoading)
// 注册全局v-focus
Vue.directive('focus',vFocus)
// 注册全局v-lazy
Vue.directive('lazy',vLazy)

store.dispatch('setting/getSetting')
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')





