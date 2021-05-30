<!--
 * @Author: your name
 * @Date: 2021-04-16 16:05:27
 * @LastEditTime: 2021-04-16 16:13:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vue-app\src\views\v-pre_clock_once.vue
-->
<template>
  <div>
    <div class="title">v-pre_cloak_once</div>
    <!-- v-pre就是原样输出不进行解析 -->
    <div v-pre>原样输出{{ message }}</div>
    <!-- v-cloak -->
    <div v-cloak>渲染完成后才显示！</div>
    <!-- v-once只进行一次渲染 -->
    <div v-once>{{ message }}</div>
    <div><input type="text" v-model="message" /></div>
    <div>{{ message }}</div>
  </div>
</template>
<script>
export default {
  name: "v-bind",
  data: () => {
    return {
      message: "ssssss",
    };
  },
  methods: {},
};
</script>
<style></style>
