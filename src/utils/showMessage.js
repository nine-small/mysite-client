import $ from 'jquery';
import Icon from '@/components/Icon';
import styles from '@/utils/showMessage.module.less';
import getComponentRootDom from '@/utils/getComponentRootDom'
/**
 * 
 * @param {String} text 弹出信息的内容
 * @param {String} type info warn success error
 * @param {Number} duration 弹出后多久消失，0表示不消失
 * @param {HTMLElement} container 弹出框相对于 container 居中，如果不传就相对 body 居中
 * @param {Function} callback 回调函数
 */
function showMessage(options) {
    const text = options.text || '添加成功';
    const type = options.type || 'success';
    const duration = options.duration || 2000;
    const container = $(options.container || document.body);
    const callback = options.callback || null;
    const iconDom = getComponentRootDom(Icon, {
        type
    });
    $(iconDom).addClass(styles.icon)
    const str = `
        <div class="${styles.message} ${styles['message-'+ type]}">
            ${iconDom.outerHTML}
            <span class='message'>${text}</span>
        </div>
    `
    const item = $(str)
    // 由于弹出框需要定位，所有查看其父元素有没有relative 或 absolute，如果没有，则将其定位设置relative
    if (getComputedStyle(container[0]).position === 'static') {
        $(container).css('position', 'relative')
    }
    container.append(item)
    getComputedStyle(item[0]).left;

    item.css({
        transform: 'translate(-50%, -50%)',
        opacity: 1
    })


    duration != 0 && setTimeout(() => {
        item.css({
            transform: 'translate(-50%, -50%) translateY(-25px)',
            opacity: 0
        })
        item.one('transitionend',function(){
            this.remove();
            callback && callback();
        })
    }, duration)
}

export default showMessage