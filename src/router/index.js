import VueRouter from 'vue-router'
import Vue from 'vue'
import routes from '@/router/routes.js'
import setTitle from '@/utils/setTitle'
// 使用一个Vue插件
if(!window.VueRouter){
    Vue.use(VueRouter)
}

const router = new VueRouter({
    // 配置
    routes,
    mode:"history"
})

router.afterEach((to)=>{
    setTitle.setRouterTitle(to.meta.title)
})

// router实例，需要配置到vue中
export default router;