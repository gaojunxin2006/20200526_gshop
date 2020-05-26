//路由器对象模块

import Vue from 'vue'
import VueRouter from 'vue-router'

//引入路由组件
import MSite from '../pages/MSite/MSite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import login from '../pages/login/login'


//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({

  //传入配置对象

  //所有路由
  routes:[
    {
      path:'/msite',
      component:MSite,

      //隐藏app下面搜索 我的那四个属性条件
      meta:{
        showFooter:true

      },
    },
    {
      path:'/search',
      component:Search,
      //隐藏app下面搜索 我的那四个属性条件
      meta:{
        showFooter:true

      },
    },
    {
      path:'/order',
      component:Order,
      //隐藏app下面搜索 我的那四个属性条件
      meta:{
        showFooter:true

      },
    },
    {
      path:'/profile',
      component:Profile,
      //隐藏app下面搜索 我的那四个属性条件
      meta:{
        showFooter:true

      },
    },

    {
      path:'/login',
      component:login,


    },


    //配置默认
    {
      path:'/',
      redirect:'/msite',

    }


  ]




})
