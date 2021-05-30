<!--
 * @Author: your name
 * @Date: 2021-04-16 16:16:13
 * @LastEditTime: 2021-04-17 16:24:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vue-app\src\views\API.vue
-->
<template>
  <div>
    <div class="title">API</div>
    <Directive></Directive>
    <Extend></Extend>
    <Set></Set>
  </div>
</template>
<script>
import Directive from "@/components/vue.directive.vue";
import Extend from "@/components/vue.extend.vue";
import Set from "@/components/vue.set.vue";
export default {
  name: "API",
  data: () => {
    return {
      img_src: require("../assets/img.png"),
    };
  },
  methods: {},
  components: {
    Directive,
    Extend,
    Set,
  },
};
</script>
<style></style>
