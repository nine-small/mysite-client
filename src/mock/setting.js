import Mock from "mockjs";
import qqImg from '../../public/image/qq.png';
import weixin from '../../public/image/weixin.png';
import avatar from '../../public/image/avatar.jpeg'

Mock.mock('/api/setting', 'get', function () {
    return {
        code: 0,
        msg: "数据获取成功",
        data: {
            avatar,
            siteTitle: "我的个人空间",
            github: "https://github.com/smallnine345",
            qq: "1203160473",
            qqQrCode: qqImg,
            weixin: "19112085274",
            weixinQrCode: weixin,
            mail: "1203160473@qq.com",
            icp: "渝ICP备17001719号",
            githubName: "smallnine345",
            favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
            about:'https://www.taobao.com/'
        }
    }
})