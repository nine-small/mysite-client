import Mock from "mockjs";


Mock.mock('/api/setting', 'get', function () {
    return {
        code: 0,
        msg: "",
        data: {
            avatar: "https://img2.baidu.com/it/u=4287382951,1120228465&fm=26&fmt=auto",
            siteTitle: "我的个人空间",
            github: "https://github.com/smallnine345",
            qq: "1203160473",
            qqQrCode: 'https://img1.baidu.com/it/u=1562963093,2774769360&fm=253&fmt=auto&app=120&f=JPEG?w=430&h=430',
            weixin: "19112085274",
            weixinQrCode: 'https://img1.baidu.com/it/u=1562963093,2774769360&fm=253&fmt=auto&app=120&f=JPEG?w=430&h=430',
            mail: "1203160473@qq.com",
            icp: "渝ICP备17001719号",
            githubName: "smallnine345",
            favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
            about:'https://www.taobao.com/'
        }
    }
})