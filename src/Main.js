//入口js

import Vue from 'vue';
import App from './App'

//映射路由器，否则无法使用
import router from './router'

new Vue({

  el:'#app',
  render:h=>h(App),
  router,



})
