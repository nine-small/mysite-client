// loading时显示的图片
import lazyPicture from '@/assets/lazy.gif'
// 事件总线
import eventBus from "@/eventBus"
// 防抖
import debounce from '@/utils/debounce'

let imgs = []

function mainScroll() {
    imgs = imgs.filter(ele => ele)
    if (imgs.length === 0) {
        return
    }
    handleImgs(imgs)
}
const debounceMainScroll = debounce(mainScroll, 100)

function handleImgs(arr) {
    arr.forEach((ele, i) => {
        ele.dom.src = lazyPicture;
        let dom = ele.dom.getBoundingClientRect();
        console.log(arr)
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
        // 第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
        // 全局定义一个imgs数组，用来存放该页面中需要懒加载的图片放入其中。
        console.log(el)
        imgs.push({
            // 该指定绑定的元素
            dom: el,
            // 参数，为图片正确的路径
            src: binding.value
        })
        // handleImgs(imgs)
        eventBus.$on('mainScroll', debounceMainScroll)
    },
    inserted() {
        handleImgs(imgs)
    },
    unbind() {
        eventBus.$off('mainScroll', debounceMainScroll)
    }
}