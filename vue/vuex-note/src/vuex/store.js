import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

const state = {    //data
  count:3,
  counts:3
}
const mutations={ //methods
  add(state,n){
      state.count+=n;
  },
  reduce(state){
      state.count--;
  }
}
const getters = {   //computed
  counts:function(state) {
     return state.counts +=100
  }
}
const actions = {
  addAction(context) {
    context.commit('add',10)
  }
}


export default new vuex.Store({
  state,
  mutations,
  getters,
  actions
})
  
