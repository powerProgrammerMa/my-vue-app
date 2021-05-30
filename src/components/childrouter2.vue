/* eslint-disable vue/no-side-effects-in-computed-properties */
<!--
 * @Author: your name
 * @Date: 2021-04-20 16:28:39
 * @LastEditTime: 2021-04-25 11:31:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vue-app\src\components\Computed.vue
-->
<template>
  <div class="hello">
    <div>{{ msg }}</div>
    <div>{{ $route.params.userid }}</div>
  </div>
</template>
<script>
export default {
  name: "child2",
  data: () => {
    return {
      msg: "i am  child2.",
    };
  },
  computed: {},
  methods: {},
};
</script>

<!-- 加入 "scoped" 目的是让样式在这个组件中私有化，即样式只限制在本组件中，这样可以避免与外界样式出现混淆的现象。 -->
<style scoped lang="scss"></style>
