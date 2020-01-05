//!! 异步操作改值   调用方法： $store.dispatch('updateInfo')

export default {
  //context 上下文
  updateInfo(context) {
    setTimeout(() => {
      context.commit('increase') //调用getter 内的方法
    }, 1000)
  },

  //调用方法： $store.dispatch('updateInfo').then(res =>{ log(res) })  返回一个Promise 对象 调用方法调用then 操作
  updateInfo2(context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('increase')
        console.log(payload)
        resolve('for then') //
      }, 1000)
    })
  }
}
