<!--
 * @Author: your name
 * @Date: 2021-04-17 16:21:10
 * @LastEditTime: 2021-04-17 16:54:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vue-app\src\components\v-set.vue
-->
<template>
  <div class="hello">
    <h1>vue.set 全局操作</h1>
    <div>{{ count }}</div>
    <ul>
      <li v-for="(item, i) in arr" :key="i">{{ item }}</li>
      <li>{{ obj.aa }}</li>
    </ul>
    <p><button @click="add">add</button></p>
  </div>
</template>
<script>
import Vue from "vue";
var outdata = {
  count: 1,
  goods: "car",
  arr: ["aa", "bb", "cc"],
  obj: { aa: 1 },
};

export default {
  name: "set",
  data: () => {
    return outdata;
  },
  methods: {
    add: function () {
      // this.arr[1]="ff"  这样的改变是无法引起dom的重新渲染的，无法监听到数组的改变，包括改变数组长度，obj对象值只有在data里面的才是响应式的如果在外部则也无法监听到改变
      console.log(this.arr);
      this.$set(this.arr, 1, "ff"); //this.$set就是为了解决上述情况
      Vue.set(this.obj, "aa", 2); //Vue.set==this.$set就是为了解决上述情况
    },
  },
};
</script>

<!-- 加入 "scoped" 目的是让样式在这个组件中私有化，即样式只限制在本组件中，这样可以避免与外界样式出现混淆的现象。 -->
<style scoped lang="scss"></style>
