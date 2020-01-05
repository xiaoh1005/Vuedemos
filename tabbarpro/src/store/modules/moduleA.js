// for modules
export default {
    state: {
      name: 'name'
    },
    // $store.mutations.increase  回去调用 store中的而不是moduleA中的  （所以取名不能一样
    mutations: {
      updateName(state, payload) {
        state.name = payload //
      }
    },
    getters: {
      // $store.getters.fullname3
      fullname1(state) {
        return state.name + '123123'
      },
      fullname2(state, getters) {
        return getters.fullname1 + '123123'
      },
      fullname3(state, getters, rootState) {
        return getters.fullname2 + rootState.counter //getters ：取当前getters  | rootState：获取store
      }
    },
    actions: {
      //只能commit 当前模块内的mutations内的方法
      aUpdateName(context) {
        //此处 context也包含root的上下文（getters state
        context.commit('updateName', 'newName')
      }
    }
  
}
