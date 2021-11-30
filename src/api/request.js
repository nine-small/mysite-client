import showMessage from '../utils/showMessage.js'
const axios = require("axios");
const ins = axios.create();

ins.interceptors.response.use((resp) => {
    if (resp.data.code !== 0) {
        showMessage({
            text: '发生了错误',
            type: 'error'
        })
        return null
    } else {
        return resp.data.data
    }
})



export default ins