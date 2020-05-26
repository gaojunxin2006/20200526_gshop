<template>

    <div id="app">
        <!-- 上面是路由 -->
      <router-view/>


      <!-- 写入引用的标签 showFooter 为真是才显示-->
      <FooterGuide v-show="$route.meta.showFooter"/>
    </div>




</template>


<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'

  export default {

    //把引入的组件映射成标签
    components:{
      FooterGuide,


    },


  }


</script>


<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5

</style>
