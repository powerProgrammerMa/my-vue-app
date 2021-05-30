/* eslint-disable vue/no-side-effects-in-computed-properties */
<!--
 * @Author: your name
 * @Date: 2021-04-20 16:28:39
 * @LastEditTime: 2021-04-25 11:47:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vue-app\src\components\Computed.vue
-->
<template>
  <div class="hello">
    <h1>选项---Watch--监听</h1>
    <div>{{ wendu }}</div>
    <div>{{ chuanyi }}</div>

    <button @click="changeadd">升高温度</button>
    <button @click="changejianshao">降低温度</button>
  </div>
</template>
<script>
// import Vue from 'vue';
//watch主要用于监听data里面的属性值
export default {
  name: "watch",
  data: () => {
    return {
      wendu: 1,
      chuanyi: "夹克",
    };
  },
  watch: {
    //这是内部监听
    wendu(newval, oldval) {
      console.log(oldval);
      if (newval >= 26) {
        this.chuanyi = "短袖";
      } else if (newval < 26 && newval > 0) {
        this.chuanyi = "夹克或长裙";
      } else {
        this.chuanyi = "羽绒服";
      }
    },
  },
  methods: {
    changeadd() {
      this.wendu += 5;
    },
    changejianshao() {
      this.wendu -= 5;
    },
  },
};
//这是外部监听,app需要引入
// app.$watch("wendu",function(newval,oldval){
//   console.log(oldval)
//       if(newval>=26){
//         this.chuanyi="短袖"
//       }else if(newval<26 && newval>0){
//         this.chuanyi = "夹克或长裙"
//       }else{
//         this.chuanyi = "羽绒服"
//       }
// })
</script>

<!-- 加入 "scoped" 目的是让样式在这个组件中私有化，即样式只限制在本组件中，这样可以避免与外界样式出现混淆的现象。 -->
<style scoped lang="scss"></style>
