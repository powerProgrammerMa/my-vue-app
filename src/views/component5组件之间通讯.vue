<!--
 * @Author: your name
 * @Date: 2021-04-20 16:07:45
 * @LastEditTime: 2021-04-25 11:02:43
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
    <div class="title">vue 组件5 component标签组件之间通讯</div>
    <div>{{ txt }}{{ parentAge }}</div>
    <button @click="change">change</button>
    <childComponent
      :parentAge="parentAge"
      @addParentAge="handleAddParentAge"
    ></childComponent>
  </div>
</template>
<script>
import childComponent from "./componentchild";
//总结：父子组件传参使用：绑定数据，子组件通过props来接收数据，通过@绑定方法到子组件，子组件通过this.$emit(绑定的方法,参数)给父组件提供数据
export default {
  name: "vue-component5",
  data: () => {
    return {
      txt: "父组件原来年龄",
      parentAge: 12,
    };
  },
  components: {
    childComponent: childComponent,
  },
  methods: {
    change: function () {
      this.parentAge = 13;
    },
    handleAddParentAge(actualAge) {
      console.log("父组件的实际年龄是：", actualAge);
      this.parentAge = actualAge;
      this.txt = "父组件真实的年龄：";
    },
  },
};
</script>
<style></style>
