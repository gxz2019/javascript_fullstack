
import Vuex from 'vuex'
import Vue from 'vue'
import router from '../router/index'


Vue.use(Vuex)

const state = { //data
  count1 : 3
}
const getters = {  //computed
  count1:function(state) {
    return  state.count1 +=100
  }
}
const mutations = {  //methods
  add(state,n) {
    state.count1+=n 
  },
  toIndex() {
    router.push({path:'/Index'})
  }
}
const actions = {   //优化mutations
  addAction(context) {
    setTimeout(() => {
      context.commit('add',10)
    }, 2000);
    console.log('我先执行了')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})