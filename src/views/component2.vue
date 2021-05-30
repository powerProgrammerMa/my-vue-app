<!--
 * @Author: your name
 * @Date: 2021-04-20 15:52:56
 * @LastEditTime: 2021-04-20 15:58:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vue-app\src\views\component2.vue
-->
<template>
  <div>
    <div class="title">vue 组件2 挂载属性</div>
    <my-one :here="here1" my-data="123"></my-one>
  </div>
</template>
<script>
export default {
  name: "vue-component2",
  data: () => {
    return {
      here1: "四川",
    };
  },
  components: {
    "my-one": {
      template: `<div>熊猫来自{{here}}{{myData}}</div>`,
      props: ["here", "myData"], //props是数组，且注意驼峰命名的写法
    },
  },
};
</script>
<style></style>
