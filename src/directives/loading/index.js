import $ from "jquery";
import styles from './styles/loading.module.less'

function createDom() {
    const str = `<ul class="loading-container"></ul>`
    const ul = $(str)
    ul.addClass(styles['loading-container'])
    for (let i = 1; i <= 5; i++) {
        const li = $(`<li class="item${i}"></li>`);
        li.addClass(styles['loading-container']['li'])
        li.addClass(styles[`item${i}`])
        ul.append(li)
    }
    return ul
}
export default function (el, binding) {
    const ulItem = $(el).find('.loading-container')[0];
    if(binding.value){
        if(!ulItem){
            const ul = createDom()
            $(el).append(ul);
        }
    }else{
        if(ulItem){
            ulItem.remove()
        }
    }
}