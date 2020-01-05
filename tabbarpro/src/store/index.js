import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

Vue.use(Vuex)


const state = {
  counter: 100,
  students: [
    { name: 'a', age: 12 },
    { name: 'b', age: 23 },
    { name: 'c', age: 23 },
    { name: 'd', age: 23 }
  ]
}

const store = new Vuex.Store({
  //定义值
  // 直接获取值 $store.state.xx
  state,

  mutations,

  actions,

  getters,

  //抽取模块 方法： 类似 $store.getter.  会先去去store中找，找不到再去定义的模块中寻找
  modules: {
    a: moduleA
  }
})

export default store
