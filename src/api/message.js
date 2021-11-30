import ins from './request'
// 提交留言 nickname, content, blogId
export async function postMessage(commentInfo) {
    return await ins.post('/api/message', commentInfo)
}

// 获取评论
/**
 * 
 * @param {*} page  当前页码
 * @param {*} limit 页容量
 * @returns 
 * 在axios请求中配置参数params时，表示参数  eg:?name=zh&age=18 
 */
export async function getMessages(page = 1, limit = 10) {
    return await ins.get('/api/message', {
        params: {
            page,
            limit
        }
    })
}