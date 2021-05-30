<!--
 * @Author: your name
 * @Date: 2021-04-16 16:19:50
 * @LastEditTime: 2021-04-16 16:48:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vue-app\src\components\v-directive.vue
-->
<template>
  <div class="hello">
    <h1>directive 自定义指令</h1>
    <div v-my="color">{{ num }}</div>
    <p><button @click="Add">ADD</button></p>
  </div>
</template>
<script>
export default {
  name: "Directive",
  data: () => {
    return {
      num: 1,
      color: "yellow",
    };
  },
  methods: {
    Add: function () {
      this.num++;
    },
  },
  //   这是局部注册，也可以全局注册
  // 四个钩子函数bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。

  // inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。

  // update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。

  // 我们会在稍后讨论渲染函数时介绍更多 VNodes 的细节。

  // componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。

  // unbind：只调用一次，指令与元素解绑时调用。
  directives: {
    my: {
      bind: function (el, binding) {
        console.log(el);
        console.log(binding);
        el.style = "color:" + binding.value;
      },
      update: function (el, binding) {
        console.log(el);
        console.log(binding);
        el.style = "color:red";
      },
    },
  },
};
</script>

<!-- 加入 "scoped" 目的是让样式在这个组件中私有化，即样式只限制在本组件中，这样可以避免与外界样式出现混淆的现象。 -->
<style scoped lang="scss"></style>
