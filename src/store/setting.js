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
        async getSetting(ctx){
            if(ctx.state.data){
                return 
            }
            ctx.commit('setLoading',true)
            const resp = await getSetting()
            ctx.commit('setData',resp)
            ctx.commit('setLoading',false)
        }
    },
    namespaced:true
}