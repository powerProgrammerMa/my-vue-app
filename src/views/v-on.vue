<!--
 * @Author: your name
 * @Date: 2021-04-14 16:14:10
 * @LastEditTime: 2021-04-16 15:33:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue2.0\my-vue-app\src\views\v-on.vue
-->
<template>
  <div>
    <div class="title">v-on</div>
    <div>本场比赛得分===={{ number }}</div>
    <p>
      <button v-on:click="jiafen">加分</button>
      <button @click="jianfen">减分</button>
      <input type="text" @keyup.enter="onEnter" v-model="num_input" />
    </p>
  </div>
</template>
<script>
// v-on主要用于绑定事件，简单写法@
export default {
  name: "v-on",
  data: () => {
    return {
      number: 0,
      num_input: "",
    };
  },
  methods: {
    jiafen: function () {
      this.number++;
    },
    jianfen: function () {
      this.number--;
    },
    onEnter: function () {
      this.number += parseInt(this.num_input);
    },
  },
};
</script>
<style></style>
