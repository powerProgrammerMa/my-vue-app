/* eslint-disable vue/no-side-effects-in-computed-properties */
<!--
 * @Author: your name
 * @Date: 2021-04-20 16:28:39
 * @LastEditTime: 2021-04-25 13:03:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vue-app\src\components\Computed.vue
-->
<template>
  <div class="hello">
    <h1>动画</h1>
    <button @click="show = !show">Toggle show</button>
    <transition name="bounce">
      <p v-if="show">显示隐藏的动画</p>
    </transition>
    <ul>
      <transition-group name="bounce">
        <li v-for="(item, i) in list" :key="i">{{ item }}</li>
      </transition-group>
    </ul>
    <button @click="add">增加元素</button>
    <button @click="jian">减少元素</button>
  </div>
</template>
<script>
export default {
  name: "watch",
  data: () => {
    return {
      show: true,
      list: [1, 2, 5, 7],
    };
  },
  methods: {
    add() {
      var num = parseInt(Math.random() * 10);
      this.list.push(num);
    },
    jian() {
      this.list.splice(--this.list.length);
    },
  },
};
</script>

<!-- 加入 "scoped" 目的是让样式在这个组件中私有化，即样式只限制在本组件中，这样可以避免与外界样式出现混淆的现象。 -->
<style scoped lang="scss">
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
