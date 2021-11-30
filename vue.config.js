// vue-cli的配置文件
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

let externals = {}
if (process.env.NODE_ENV === 'production') {
    externals = {
        vue: "Vue",
        vuex: "Vuex",
        "vue-router": "VueRouter",
    }
}




module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://127.0.0.1:7001",
            }
        }
    },
    configureWebpack: {
        plugins: [new BundleAnalyzerPlugin()],
        externals
    }

}