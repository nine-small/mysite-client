import Mock from 'mockjs'

Mock.mock('/api/project', 'get', function () {
    return Mock.mock({
        code: 0,
        msg: "",
        'data|15': [{
                'id|+1': 1 ,
                'name': "@ctitle",
                'url|1': ["@url('https')",null],
                'github|1':[null,'@url("http")'],
                'description|3': ["@cparagraph"],
                'thumb|1': ["https://img2.baidu.com/it/u=1945464906,1635022113&fm=26&fmt=auto",'https://img1.baidu.com/it/u=3246628741,3439955235&fm=26&fmt=auto'],
                'order|+1': 1
            }  
        ]
    })
})