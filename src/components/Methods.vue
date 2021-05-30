/* eslint-disable vue/no-side-effects-in-computed-properties */
<!--
 * @Author: your name
 * @Date: 2021-04-20 16:28:39
 * @LastEditTime: 2021-04-25 11:24:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vue-app\src\components\Computed.vue
-->
<template>
  <div class="hello">
    <h1>选项---methods</h1>
    <div>{{ price }}</div>
    <button @click="change(123, $event)">设置</button>
    <!-- //如果想要子组件调用父组件的事件可以加上.native修饰符,但是只能在组件标签上使用 -->
    <btn @click.native="change(123, $event)"></btn>
  </div>
</template>
<script>
var btn = {
  template: `<button>设置</button>`,
};
//methods选项，其实就是用于定义我们组件的所有响应事件，如果需要在app外部调用内部事件，需要通过app.name的方式
export default {
  name: "methods",
  data: () => {
    return {
      price: 1,
    };
  },
  components: {
    btn: btn,
  },
  methods: {
    change(num, event) {
      console.log(event);
      this.price += num;
    },
  },
};
</script>

<!-- 加入 "scoped" 目的是让样式在这个组件中私有化，即样式只限制在本组件中，这样可以避免与外界样式出现混淆的现象。 -->
<style scoped lang="scss"></style>
