/* eslint-disable vue/no-side-effects-in-computed-properties */
<!--
 * @Author: your name
 * @Date: 2021-04-20 16:28:39
 * @LastEditTime: 2021-04-25 12:22:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vue-app\src\components\Computed.vue
-->
<template>
  <div class="hello">
    <h1>选项---mixins--混入</h1>
    <div>{{ wendu }}</div>

    <button @click="changeadd">改变一下izi</button>
    <button @click="changejian">全局方法改变一下izi</button>
  </div>
</template>
<script>
//混入mixins主要用于为了不破坏当前构造器的完整性，临时添加需求或者为了给全局注册方法、属性、组件等等，通常会建立一个单独的minxins。js文件
//混入全局方法的例子移步到main。js
//混入的先执行，内部的后执行
var addMethod = {
  methods: {
    changeadd() {
      this.wendu += 5;
    },
  },
};
export default {
  name: "watch",
  data: () => {
    return {
      wendu: 1,
    };
  },
  mixins: [addMethod],
};
</script>

<!-- 加入 "scoped" 目的是让样式在这个组件中私有化，即样式只限制在本组件中，这样可以避免与外界样式出现混淆的现象。 -->
<style scoped lang="scss"></style>
