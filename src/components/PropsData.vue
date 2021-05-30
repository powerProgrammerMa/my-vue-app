<!--
 * @Author: your name
 * @Date: 2021-04-20 16:21:05
 * @LastEditTime: 2021-04-20 16:27:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vue-app\src\components\PropsData.vue
-->
<template>
  <div class="hello">
    <h1>选项---propsdata</h1>
    <header></header>
  </div>
</template>
<script>
import Vue from "vue";

export default {
  name: "propsdata",
  mounted: function () {
    //新建扩展
    const testComponent = Vue.extend({
      template: "<div>{{ text }}====={{a}}</div>",
      data: function () {
        return {
          text: "propsdata test",
        };
      },
      props: ["a"], //接收传递的数据
    });
    //扩展需要挂载,然后传递参数
    new testComponent({ propsData: { a: 1 } }).$mount("header");
  },
  data: () => {
    return {
      num: 1,
    };
  },
  methods: {},
};
</script>

<!-- 加入 "scoped" 目的是让样式在这个组件中私有化，即样式只限制在本组件中，这样可以避免与外界样式出现混淆的现象。 -->
<style scoped lang="scss"></style>
