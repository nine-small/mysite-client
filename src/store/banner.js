import {
    getBanners
} from '@/api/banner'
// import serviceUrl from '@/serviceUrl'
export default {
    state: {
        loading: false,
        data: null
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload
        },
        setData(state, payload) {
            state.data = payload
        }
    },
    actions: {
        async getBanner({commit,state}) {
            if (state.data) {
                return
            }
            commit('setLoading', true)
            const resp = await getBanners()
            // const len = resp.length;
            // for(let i = 0 ; i < len ; i ++){
            //     resp[i].bigImg = serviceUrl + resp[i].bigImg;
            //     resp[i].midImg = serviceUrl + resp[i].midImg;
            // }
            commit('setData', resp)
            commit('setLoading', false)
        }
    },
    namespaced: true
}