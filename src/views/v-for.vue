<!--
 * @Author: your name
 * @Date: 2021-04-14 14:51:38
 * @LastEditTime: 2021-04-16 15:09:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue2.0\my-vue-app\src\views\v-show_v-if.vue
-->
<template>
  <div>
    <div class="title">v-for</div>
    <ul>
      <li v-for="(item, i) in items" :key="i">
        {{ item.age }}岁----{{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script>
// if和show 的区别在于if是判定渲不渲染，减轻了服务器的压力，但是show是通过css的display属性来实现的，可以使客户端操作更加流畅
export default {
  name: "v-for",
  data: () => {
    return {
      items: [
        { name: "jj", age: "78" },
        { name: "kk", age: "11" },
        { name: "pp", age: "13" },
        { name: "uu", age: "17" },
        { name: "oo", age: "19" },
        { name: "dd", age: "12" },
        { name: "aa", age: "14" },
      ],
    };
  },
};
</script>
<style>
li {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
