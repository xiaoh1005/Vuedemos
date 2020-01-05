import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'

// 设置默认全局信息
axios.defaults.baseURL = 'www.baidu.com'
axios.defaults.timeout = 5000
axios({
  url: '/asd',
  method: 'get'
}).then(res => {
  // 支持Promise 返回结果
  console.log(res)
})

// 基本请求
// type 1
axios({
  url: 'www.baidu.com',
  method: 'get'
}).then(res => {
  // 支持Promise 返回结果
  console.log(res)
})

//type 2 传参
axios({
  url: 'www.baidu.com',
  params: {
    type: 'key',
    page: '1'
  }
})

//并发请求
// 传入参数： 包含多个请求的数组
//返回结果: 数组[res1,res2] 可以使用axios.spread 展开为res1 res2
axios.all([axios(), axios()]).then(results => {})

axios
  .all([
    axios({
      baseURL: 'www.baidu.com',
      url: '/qwe'
    }),
    axios({
      url: 'www.baidu.com'
    })
  ])
  .then(results => {
    console.log('both ok')
  })

Vue.config.productionTip = false

////*******一般用这种 ********  */
//创建对应的axios的示例  （等于根绝base进行分类？
const instance1 = axios.create({
  baseURL: 'www.baidu.com',
  timeout: '5000'
})

//调用实例
instance1({
  url: '/haha'
}).then(res => {
  console.log(res)
})

const instance2 = axios.create({
  baseURL: 'www.souhu.com',
  timeout: '3000'
})

//调用实例
instance2({
  url: '/hahaaaaaaaa'
}).then(res => {
  console.log(res)
})

/**  封装 request  */

import { request, instance1, instance2 } from './network/request'

//法一
request(
  {
    url: '/hashas'
  },
  res => {
    //回调函数 获取结果
    console.log(res)
  }
)
//法二
instance1({
  baseConfig: {
    url: '/asdasdasd'
  },
  //回调函数 写在config里
  success(res) {},
  failure(res) {}
})

//法三
instance2({
  url: '/zxc'
})
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })






new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



