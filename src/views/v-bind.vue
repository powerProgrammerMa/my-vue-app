<!--
 * @Author: your name
 * @Date: 2021-04-16 14:55:13
 * @LastEditTime: 2021-04-16 15:54:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vue-app\src\views\v-bind.vue
-->
<template>
  <div>
    <div class="title">v-bind</div>
    <img v-bind:src="img_src" width="200px" alt="图片" />
    <img :src="img_src" width="300px" alt="图片" />
    <hr />
    <div :class="className">1.绑定class</div>
    <div :class="isOk ? 'classA' : 'classB'">2.绑定class三元运算判断</div>
    <div :class="{ classA: isOk }">3.绑定class判断</div>
    <div :class="class_Array">4.绑定class数组</div>
    <hr />
    <div>
      <input type="checkbox" id="Yes" v-model="Yes" />
      <label for="Yes">Yes={{ Yes }}</label>
    </div>
    <hr />
    <div :style="{ color: bind_color, fontSize: bind_font }">5.绑定style值</div>
    <div :style="bind_style">6.绑定style值</div>
  </div>
</template>
<script>
// v-bind主要用于绑定标签上的属性，简单学法直接：
//如果绑定style动态值 需要注意style的属性值需要使用驼峰命名
export default {
  name: "v-bind",
  data: () => {
    return {
      //由于是本地静态文件，所以需要require引入
      img_src: require("../assets/img.png"),
      className: "classA",
      isOk: true,
      Yes: true,
      class_Array: ["classA", "classB"],
      bind_color: "green",
      bind_font: "30px",
      bind_style: { color: "yellow", fontSize: "25px" },
    };
  },
  methods: {},
};
</script>
<style>
.classA {
  color: red;
}
.classB {
  font-size: 40px;
}
</style>
