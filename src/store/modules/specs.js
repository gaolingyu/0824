import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { reqSpecsList } from '../../util/request'

const state = {
    list: [],//请求回来的数据
   
}
const mutations = {
    changeList(state, arr) {
        state.list = arr
    },
  

}
const actions = {
    requestSpecsList(context) {
        reqSpecsList({
            size:5,
            page:1
        }).then(res => {
            var arr = res.data.list
            arr.forEach(item => {
                 item.attrs=JSON.parse(item.attrs)
            });
            context.commit('changeList', arr)
        })
    },
    
} 
const getters = {
    list(state) {
        return state.list
    },
    
}


export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}