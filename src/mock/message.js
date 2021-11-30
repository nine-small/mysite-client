import Mock from 'mockjs'
import {
    pathArr
} from './utils'

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
            'avatar|1': ['https://img2.baidu.com/it/u=2147069683,694165929&fm=26&fmt=auto', 'https://img2.baidu.com/it/u=2510623592,4240060577&fm=26&fmt=auto', 'https://img2.baidu.com/it/u=3578628057,4277027626&fm=26&fmt=auto', 'https://img0.baidu.com/it/u=202515423,1882536880&fm=26&fmt=auto'],
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