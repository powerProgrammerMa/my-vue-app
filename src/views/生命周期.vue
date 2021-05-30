<!--
 * @Author: your name
 * @Date: 2021-04-20 14:46:36
 * @LastEditTime: 2021-05-18 16:18:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vue-app\src\views\生命周期.vue
-->
<template>
  <div>
    <div class="title">生命周期</div>
    <div>{{ count }}</div>
    <p><button @click="add">add</button></p>
  </div>
</template>
<script>
export default {
  name: "生命周期",
  data: () => {
    return {
      count: 1,
    };
  },
  beforeCreate: function () {
    console.log("1----组件创建之前");
  },
  created: function () {
    console.log("2----组件创建完场");
    //这里可以显示加载动画
    //做数据请求处理
  },
  beforeMount: function () {
    console.log("3----组件挂载之前");
  },
  mounted: function () {
    console.log("4----组件挂载完场");
    //这里可以结束加载动画
  },
  beforeUpdate: function () {
    console.log("5----组件数据更新之前");
  },
  updated: function () {
    console.log("6----组件数据更新完成");
  },
  beforeDestroy: function () {
    console.log("7----组件销毁之前");
  },
  destroyed: function () {
    console.log("8----组件被销毁");
  },
  methods: {
    add: function () {
      this.count++;
    },
  },
};
</script>
<style></style>
