import Vue from 'vue';
/**
 * 
 * @param {Component} component 组件
 * @param {Object} props 组件通信
 * @returns 组件的DOM元素
 */

 function getComponentRootDom(component, props) {
    const vm = new Vue({
        render: h => h(component, {
            props
        }),
    })
    vm.$mount();
    return vm.$el;
}
export default getComponentRootDom