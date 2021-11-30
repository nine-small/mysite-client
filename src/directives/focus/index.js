
export default function (el,binding) {
    el.onfocus = ()=>{
        binding.value[0](el)
    }
    el.onblur = ()=>{
        binding.value[1](el)
    }

}