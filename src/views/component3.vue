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
    <div class="title">vue 组件3 建立父子组件</div>
    <panda></panda>
  </div>
</template>
<script>
var city = {
  template: `<p style="color:red">四川是中国的</p>`,
};
var pandaComponent = {
  template: `<div style="color:red">
    <p>熊猫来自中国</p>
    <city></city>
    </div>`,
  components: {
    city: city,
  },
};

export default {
  name: "vue-component3",
  data: () => {
    return {
      here1: "四川",
    };
  },
  components: {
    panda: pandaComponent,
  },
};
</script>
<style></style>
