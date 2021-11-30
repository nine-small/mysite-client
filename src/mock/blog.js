import Mock from 'mockjs'
import {
    pathArr
} from './utils.js'

import htmlContent from "./data/article.js"


// 博客分类数据模拟

Mock.mock('/api/blogtype', 'get', function () {
    const data = Mock.mock({
        code: 0,
        msg: "success",
        "data|10": [{
            "id|+1": 1,
            name: "分类@id",
            "articleCount|5-10": 1,
            // 该分类下文章的数量
            "order|5-10": 1,
            'children|0-20': [{
                "id|+1": 1,
                name: "文章@id",
                "articleCount|10-100": 10,
                "order": 0,
            }]
        }]
    })
    return data;
})


// 模拟博客数据
Mock.mock(/\/api\/blog(\?.+)?$/, 'get', function (options) {
    const str = options.url.split("?")[1];
    const obj = pathArr(str);
    const {
        limit
    } = obj
    return Mock.mock({
        code: 0,
        msg: 'success',
        data: {
            "total": 53,
            [`rows|${limit}`]: [{
                "id|+1": 1,
                "title": "@ctitle(10,30)",
                'description': "@cparagraph(5,10)",
                'category': {
                    "id|+1": 1,
                    "name": "分类@id"
                },
                "scanNumber|100-3000": 1,
                "commentNumber|100-3000": 1,
                'thumb': "@image(300x250,@color(),#FFFFFF,png,@title(4,7))",
                'createDate': "@date(T)",
            }]
        },
    })
})

// 单个博客数据

Mock.mock(/^\/api\/blog\/[^/]+$/, 'get', function () {
    return Mock.mock({
        'code': 0,
        'msg': "",
        'data': {
            "id": "@guid",
            'title': "CORS跨域方案详解",
            'category': {
                'id|1-10': 1,
                'name': "分类@id"
            },
            //  #浏览次数
            'scanNumber|100-10000': 0,
            // #评论数
            'commentNumber|1-100': 0,
            // 博客描述，显示到列表页
            'description': "cparagraph",
            // #时间戳，创建日期
            'createDate': '@date(T)',
            // # 博客章节目录
            'toc': [{
                    name: "概述",
                    anchor: "article-md-title-1"
                },
                {
                    name: "简单请求",
                    anchor: "article-md-title-2",
                    children: [{
                            name: "简单请求的判定",
                            anchor: "article-md-title-3"
                        },
                        {
                            name: "简单请求的交互规范",
                            anchor: "article-md-title-4"
                        },
                    ],
                },
                {
                    name: "需要预检的请求",
                    anchor: "article-md-title-5",
                },
                {
                    name: "附带身份凭证的请求",
                    anchor: "article-md-title-6",
                },
                {
                    name: "一个额外的补充",
                    anchor: "article-md-title-7",
                },
            ],
            // #博客的html内容
            'htmlContent': htmlContent,
            'thumb': "@image(300x250,@color(),#FFFFFF,png,@title(4,7))",
        }
    })
})

// 提交评论后
Mock.mock('/api/comment', 'post', function (options) {
    const data = JSON.parse(options.body)
    const nickname = data.nickname || 'nobody'
    const content = data.content || 'nothing'
    const blogId = data.blogId || -1
    console.log(data)
    return Mock.mock({
        'code': 0,
        'msg': "success",
        'data': {
            'id|1-10': 1,
            'nickname': nickname,
            'content': content,
            'blog': {
                //  #博客id
                'id': blogId,
                'title': "@ctitle"
            },
            'createDate': "@date(T)",
            'avatar': "随机的头像地址",
        }
    })
})


// 分页获取评论

Mock.mock(/^\/api\/comment/, 'get', function (options) {
    options
    return Mock.mock({
        'code': 0,
        'msg': "",
        'data': {
            // #总数
            'total': 53,
            // #当前页列表数据
            'rows|10': [{
                'id|+1': 1,
                'nickname': "@cname",
                'content': "@cparagraph",
                'blog': {
                    // #博客id
                    'id': "@id",
                    'title': "@ctitle"
                },
                'createDate': "@date(T)",
                'avatar|1': ['https://img2.baidu.com/it/u=2147069683,694165929&fm=26&fmt=auto', 'https://img2.baidu.com/it/u=2510623592,4240060577&fm=26&fmt=auto', 'https://img2.baidu.com/it/u=3578628057,4277027626&fm=26&fmt=auto', 'https://img0.baidu.com/it/u=202515423,1882536880&fm=26&fmt=auto'],
            }]
        }
    })
})