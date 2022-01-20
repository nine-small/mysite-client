import Mock from 'mockjs'
import {
    pathArr
} from './utils'
import a1 from '../../public/image/a1.webp'
import a2 from '../../public/image/a2.webp'
import a3 from '../../public/image/a3.webp'
import a4 from '../../public/image/a4.webp'
import a5 from '../../public/image/a5.webp'
import a6 from '../../public/image/a6.webp'



Mock.mock(/\/api\/message.+/, 'get', function (options) {
    const {
        page,
        limit
    } = pathArr(options.url)
    const data = {
        // #总数
        'total': 53,
        // #当前页列表数据
        [`rows|${limit}`]: [{
            'id|+1': 1,
            'nickname': "@cname",
            'content': "@cparagraph",
            'createDate': "@date(T)",
            'avatar|1': [a1,a2,a3,a4,a5,a6],
        }]
    }
    data
    page
    return Mock.mock({
        'code': 0,
        'msg': "",
        data
    })
})