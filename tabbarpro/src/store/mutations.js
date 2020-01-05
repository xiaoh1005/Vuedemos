import { DECREASE } from './mutations-types'
//通过mutation 改值  ！！使用同步操作！！！
export default {
  // 调用方法： $store.commit('increase')
  increase(state) {
    state.counter++
  },
  decrease(state) {
    state.counter--
  },
  //调用方法： 传参 $store.commit('decrease2',time)
  decrease2(state, time) {
    state.counter -= time
  },
  changeStu(state, name, addr) {
    sett => {
      return Vue.set(state.students[0], name, addr) //响应式更改
    },
      del => Vue.delete(state.students[0], name) //响应式更改
  },
  [DECREASE](state) {} //常量方法
}
