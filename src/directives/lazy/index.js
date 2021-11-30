import lazyPicture from '@/assets/lazy.gif'
import eventBus from "@/eventBus"
import debounce from '@/utils/debounce'
import _ from 'lodash'
let imgs = []
function mainScroll() {
    imgs = _.compact(imgs)
    if(imgs.length === 0){
        return
    }
    handleImgs(imgs)
}
const debounceMainScroll = debounce(mainScroll, 100)
function handleImgs(arr) {
    arr.forEach((ele, i) => {
        ele.dom.src = lazyPicture;
        const dom = ele.dom.getBoundingClientRect();
        if (dom.top > 0 && dom.top < window.innerHeight) {
            const img = new Image();
            img.src = ele.src;
            img.onload = () => {
                ele.dom.src = ele.src;
                delete arr[i]
            }
        }

    })

}
export default {
    bind(el, binding) {
        imgs.push({
            dom: el,
            src: binding.value
        })
        handleImgs(imgs)
        eventBus.$on('mainScroll', debounceMainScroll)
    },
    unbind() {
        eventBus.$off('mainScroll', debounceMainScroll)
    }
}