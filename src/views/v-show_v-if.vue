<!--
 * @Author: your name
 * @Date: 2021-04-14 14:51:38
 * @LastEditTime: 2021-04-16 15:10:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue2.0\my-vue-app\src\views\v-show_v-if.vue
-->
<template>
  <div>
    <div class="title">v-if/v-else/v-show</div>
    <div v-if="isLogin_if_else">你好欢迎登录到平台</div>
    <div v-else>你还没有登录</div>
    <div v-show="isLogin_show">你是真实的</div>
  </div>
</template>
<script>
// if和show 的区别在于if是判定渲不渲染，减轻了服务器的压力，但是show是通过css的display属性来实现的，可以使客户端操作更加流畅
export default {
  name: "if_show",
  data: () => {
    return {
      isLogin_if_else: false,
      isLogin_show: false,
    };
  },
};
</script>
<style>
.title {
  font-size: 30px;
}
</style>
