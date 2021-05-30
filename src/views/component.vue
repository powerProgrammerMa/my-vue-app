<!--
 * @Author: your name
 * @Date: 2021-04-20 15:06:45
 * @LastEditTime: 2021-04-20 15:50:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vue-app\src\views\component.vue
-->
<template>
  <div>
    <div class="title">vue 组件</div>
    <my-all></my-all>
    <my-one></my-one>
  </div>
</template>
<script>
// import tem from "../components/tem"
import Vue from "vue";
Vue.component("my-all", {
  template: `<div>我是全局的js组件</div>`,
}); //全局注册---一般会放到main。js里面
export default {
  name: "vue-component",
  data: () => {
    return {
      count: 1,
    };
  },
  components: {
    "my-one": {
      template: `<div>我是局部的js组件</div>`,
    },
  },
};
</script>
<style></style>
