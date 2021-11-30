import ins from './request.js'


// 获取博客分类
export async function getBlogType() {
    return await ins.get('/api/blogtype')
}

// 获取博客数据
/**
 * 
 * @param {Number} page - 当前页码
 * @param {Number} limit - 	页容量
 * @param {Number} categoryId - 所属分类，-1表示全部
 * @returns 
 */

export async function getBlogs(page = 1, limit = 5, categoryId = -1) {
    return await ins({
        url: '/api/blog',
        method: 'get',
        params: {
            page,
            limit,
            categoryId
        }
    })
}

// 获取单个博客
export async function getBlog(id) {
    return await ins.get(`/api/blog/${id}`)
}


// 提交评论 nickname, content, blogId
export async function postComment(data) {
    return await ins({
        url: '/api/comment',
        method: 'post',
        data
    })
}

// 获取评论
/**
 * 
 * @param {*} page  当前页码
 * @param {*} limit 页容量
 * @param {*} blogId 所属文章，-1表示不限
 * @returns 
 * 在axios请求中配置参数params时，表示参数  eg:?name=zh&age=18 
 */
export async function getComments(page = 1, limit = 10, blogId = -1) {
    return await ins.get('/api/comment', {
        params: {
            page,
            limit,
            blogId
        }
    })
}