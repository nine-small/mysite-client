import { getProjects } from "../api/getProjects"
export default {
    state:{
        data:null,
        loading:false,
    },
    mutations:{
        setData(state,payload){
            state.data = payload
        },
        setLoading(state,payload){
            state.loading = payload
        }
    },
    actions:{
        async getProjects(ctx){
            if(ctx.state.data){
                return
            }
            ctx.commit('setLoading',true)
            const resp = await getProjects();
            ctx.commit('setData',resp)
            ctx.commit('setLoading',false)
        }
    },
    namespaced:true
}