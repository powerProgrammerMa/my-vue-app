<!--
 * @Author: your name
 * @Date: 2021-04-20 16:07:45
 * @LastEditTime: 2021-04-25 10:37:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vue-app\src\views\component4.vue
-->
<!--
 * @Author: your name
 * @Date: 2021-04-20 15:59:15
 * @LastEditTime: 2021-04-20 16:07:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vue-app\src\views\component3.vue
-->
<template>
  <div>
    <div class="title">vue 组件5 component标签组件之间通讯</div>

    <button @click="change">change</button>
  </div>
</template>
<script>
export default {
  name: "vue-component4",
  data: () => {
    return {
      here1: "四川",
      who: "componentA",
    };
  },
  components: {},
  methods: {
    change: function () {},
  },
};
</script>
<style></style>
