<!--
 * @Author: your name
 * @Date: 2021-04-14 15:52:55
 * @LastEditTime: 2021-04-17 14:57:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue2.0\my-vue-app\src\views\v-text_v-html.vue
-->
<template>
  <div>
    <div class="title">v-text/v-html</div>
    <!-- 使用v-text的目的就是为了避免加载慢的情况下页面出现{{text}}字样，提升用户体验的-->
    <span>{{ text }}</span> === <span v-text="text"></span>
    <!-- 尽量在工作中不要使用这个标签，存在一定风险 -->
    <div v-html="todo_html"></div>
  </div>
</template>
<script>
export default {
  name: "text_html",
  data: () => {
    return {
      text: "网页文本文档",
      todo_html: "<h2>hellow world!!</h2>",
    };
  },
};
</script>
<style></style>
