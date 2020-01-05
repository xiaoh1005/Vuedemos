// 通过getter 取值
export default {
  //返回处理后的全局变量 $store.getters.counter2
  counter2(state) {
    return state.counter * state.counter
  },
  more20stu(state) {
    // 返回大于20 岁的 stu
    return state.students.filter(s => s.age > 20)
  },
  more20stu(state, getters) {
    // 返回大于  age 岁的 stu
    return age => getters.state.students.filter(s => s.age > age)
  }
}
