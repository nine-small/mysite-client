// const listeners = {}

// export default {
//     $on(eventName, handler) {
//         if (!listeners[eventName]) {
//             listeners[eventName] = new Set()
//         }
//         listeners[eventName].add(handler)
//     },
//     $off(eventName, handler) {
//         if (!listeners[eventName]) {
//             return
//         }
//         listeners[eventName].delete(handler)
//     },
//     $emit(eventName, ...args) {
//         if (!listeners[eventName]) {
//             return
//         }
//         for (const handler of listeners[eventName]) {
//             handler(...args)
//         }
//     }
// }


/**
 * 事件名：getMoreComment
 * 含义：滚动条滚动到底部，获取更多的评论信息
 * 
 * 
 * 
 * 
 * 事件名：mainScroll
 * 含义：主区域滚动条位置变化后出发
 * 参数：
 * - 滚动的dom元素,如果不传参数，则表示dom元素不存在啊
 * 
 * 
 * 事件名：scrollTop
 * 含义： 滚动条滚动到一定区域时，top出现
 * 参数：
 *  - 滚动到的距离
 * 
 * 
 * 
 */

import Vue from 'vue'
const eventBus =  new Vue({})
Vue.prototype.eventBus = eventBus
export default eventBus