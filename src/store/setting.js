import { getSetting } from "@/api/setting"
export default {
    state:{
        loading:false,
        data:null,
    },
    mutations:{
        setLoading(state,payload){
            state.loading = payload
        },
        setData(state,payload){
            state.data = payload
        }
    },
    actions:{   
        async getSetting({state,commit}){
            if(state.data){
                return 
            }
            commit('setLoading',true)
            const resp = await getSetting()
            commit('setData',resp)
            commit('setLoading',false)
        }
    },
    namespaced:true
}