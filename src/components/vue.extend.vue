<!--
 * @Author: your name
 * @Date: 2021-04-17 14:59:44
 * @LastEditTime: 2021-04-20 15:41:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vue-app\src\components\v-extend.vue
-->
<template>
  <div class="hello">
    <h1>extend 扩展实例构造器</h1>
    <div id="author"></div>
  </div>
</template>
<script>
import Vue from "vue";

export default {
  name: "Extend",
  mounted: function () {
    //新建扩展
    const testComponent = Vue.extend({
      template: "<div>{{ text }}</div>",
      data: function () {
        return {
          text: "extend test",
        };
      },
    });
    //扩展需要挂载
    new testComponent().$mount("#author");
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
