import Vue from 'vue'
import VueRouter from 'vue-router' //导入rter
import Home from '../components/Home' //直接import非懒加载
// import About from '../components/About'
import User from '../components/User'

//懒加载 方式一
const About = () => import('../components/About')
const News = () => import('../components/News')
const News2 = () => import('../components/News2')
const Profile = () => import('../components/Profile')

Vue.use(VueRouter) //使用插件

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home, //非懒加载
    meta: {
      //添加页面属性信息？？？？ title
      title: '首页'
    },
    children: [
      //二级目录
      {
        path: 'news',
        component: News,
        meta: {
          title: '首页-news'
        }
      },
      {
        path: 'news2',
        component: News2,
        meta: {
          title: '首页-new2'
        }
      },
      {
        //默认显示
        path: '',
        redirect: 'news2'
      }
    ]
  },
  {
    path: '/about',
    component: About, //懒加载 方式一 推荐
    meta: {
      title: '关于'
    }
  },
  {
    path: '/about2',
    component: About2 => {
      return import('../components/About2')
    } //懒加载方式二
  },
  {
    path: '/user/:userId', //动态路由
    component: User
  },
  {
    path: '/profile', //http://127.0.0.1:8080/profile?name=xiaohong&id=123112
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

//===========================
//==========全局导航守卫=======
//===========================

//前置钩子 （前置回调guard）
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  console.log("（前置回调guard）")
  next() //必须调 todo// 可以用于检查，根据条件选择跳转页面 login error
})

//后置钩子(hook)
router.afterEach((to,from)=>{
  console.log("hoooook")
})
//===========================
//=====其他导航守卫见文档=======
//===========================

export default router
