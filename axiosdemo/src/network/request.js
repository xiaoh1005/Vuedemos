import axios from 'axios'

//法一
export function rquest(config, success, failure) {
  const instance = axios.create({
    baseURL: 'http://www.baidu.com',
    timeout: 5000
  })

  instance(config)
    .then(res => {
      success(res) //通过写回调函数返回值
    })
    .catch(res => {
      failure(res)
    })
}

//法二
//将回调函数写在config里
export function instance1(config) {
  const instance1 = axios.create({
    baseURL: 'http://www.baidu.com',
    timeout: 5000
  })

  instance1(config.baseConfig)
    .then(res => {
      config.success(res)
    })
    .catch(res => {
      config.failure(res)
    })
}

//法三 Promise
export function instance2(config) {
  const instance2 = axios.create({
    baseURL: 'www.baidu.com',
    timeout: 60000
  })
  return instance2(config) //返回的是一个Promise 类型
}

/** 拦截器 */
export function instance1() {
  const instance3 = axios.create({
    baseURL: 'www.baidu.com',
    timeout: 20000
  })

  //请求拦截器
  /**
   * 作用：
   * 1、修改config 中的内容，例如请求 header 的信息
   * 2、每次发送请求时，希望在界面中显示一个请求等待的图标
   * 3、某些请求，例如登录，需要携带信息，进行请求信息的检查拦截
   *
   */
  instance3.interceptors.request.use(
    config => {
      //请求成功
      return config //一定要返回！！！
    },
    err => {
      //请求失败
    }
  )

  // 响应拦截器
  /**
   *作用：
   *1、对响应结果进行格式转换
   *
   */
  instance3.interceptors.response.use(
    res => {
      //响应成功
      return res.data //一定要返回！！！
    },
    err => {
      //响应失败
    }
  )

  return instance3(config) //返回的是一个Promise 类型
}

export function instance1() {}
