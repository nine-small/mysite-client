import lazyPicture from "@/assets/lazy.gif";
import eventBus from "@/eventBus";
import debounce from "@/utils/debounce";
let imgs = [];
function mainScroll() {
    console.log(123)
  if (imgs.length === 0) {
    return;
  }
  handleImgs(imgs);
}

function handleImgs(arr) {
  arr.forEach((ele, i) => {
    ele.dom.src = lazyPicture;
    // const dom = ele.dom.getBoundingClientRect();
    // if (dom.top > 0 && dom.top < window.innerHeight) {
    const img = new Image();
    img.src = ele.src;
    img.onload = () => {
      ele.dom.src = ele.src;
      delete arr[i];
    //   }
    };
  });
}
export default {
  bind(el, binding) {
    imgs.push({
      dom: el,
      src: binding.value,
    });
    handleImgs(imgs);
    eventBus.$on("mainScroll", debounce(mainScroll, 100));
  },
  unbind() {
    eventBus.$off("mainScroll", debounce(mainScroll, 100));
  },
};
