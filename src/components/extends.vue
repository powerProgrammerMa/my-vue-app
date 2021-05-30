/* eslint-disable vue/no-side-effects-in-computed-properties */
<!--
 * @Author: your name
 * @Date: 2021-04-20 16:28:39
 * @LastEditTime: 2021-04-25 12:19:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vue-app\src\components\Computed.vue
-->
<template>
  <div class="hello">
    <h1>选项---extends--扩展选项</h1>
    <div>{{ wendu }}</div>

    <button @click="changeadd">改变一下izi</button>
  </div>
</template>
<script>
//扩展和混入很相似，但是执行顺序有区别：extends  > mixins > 组件
var addMethod = {
  methods: {
    changeadd() {
      this.wendu += 5;
    },
  },
  updated() {
    console.log("3");
  },
};
export default {
  name: "watch",
  data: () => {
    return {
      wendu: 1,
    };
  },
  updated() {
    console.log("123");
  },
  extends: addMethod,
};
</script>

<!-- 加入 "scoped" 目的是让样式在这个组件中私有化，即样式只限制在本组件中，这样可以避免与外界样式出现混淆的现象。 -->
<style scoped lang="scss"></style>
