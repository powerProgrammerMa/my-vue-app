<!--
 * @Author: your name
 * @Date: 2021-04-20 16:17:46
 * @LastEditTime: 2021-04-25 12:47:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vue-app\src\views\构造器选项.vue
-->
<template>
  <div>
    <div class="title">vue实例的选项</div>
    <PropsData></PropsData>
    <Computed></Computed>
    <Methods></Methods>
    <Watch></Watch>
    <Mixins></Mixins>
    <Extends></Extends>
    <Transition></Transition>
  </div>
</template>
<script>
import Computed from "../components/Computed";
import PropsData from "../components/PropsData";
import Methods from "../components/Methods";
import Watch from "../components/Watch";
import Mixins from "../components/mixins";
import Extends from "../components/extends";
import Transition from "../components/transition";

export default {
  name: "Option",
  data: () => {
    return {};
  },
  methods: {},
  components: {
    PropsData: PropsData,
    Computed: Computed,
    Methods: Methods,
    Watch: Watch,
    Mixins: Mixins,
    Extends: Extends,
    Transition: Transition,
  },
};
</script>
<style></style>
