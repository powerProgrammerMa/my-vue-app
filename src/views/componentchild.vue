<!--
 * @Author: your name
 * @Date: 2021-04-20 16:07:45
 * @LastEditTime: 2021-04-25 10:56:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vue-app\src\views\component4.vue
-->
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
    <div class="title">我是子组件----component标签组件之间通讯</div>
    <div>父组件传递过来的年龄：{{ parentAge }}</div>
    <div>子组件年龄：{{ childAge }}</div>
    <button @click="AddAge">parentAge+1</button>
  </div>
</template>
<script>
export default {
  name: "vue-component5",
  data: () => {
    return {
      childAge: 20,
    };
  },
  props: {
    parentAge: Number,
  },
  computed: {
    //子组件不提倡直接改变父组件传递过来的值，这样可以避免数据错乱，需要将改变的值通过计算属性提交给父组件，父组件来改变
    parentActualAge() {
      return this.parentAge + 1;
    },
  },
  methods: {
    AddAge() {
      this.$emit("addParentAge", this.parentActualAge);
    },
  },
};
</script>
<style></style>
