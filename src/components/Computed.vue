/* eslint-disable vue/no-side-effects-in-computed-properties */
<!--
 * @Author: your name
 * @Date: 2021-04-20 16:28:39
 * @LastEditTime: 2021-04-25 11:31:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vue-app\src\components\Computed.vue
-->
<template>
  <div class="hello">
    <h1>选项---computed</h1>
    <div>{{ newPrice }}</div>
    <div>{{ price }}</div>
    <button @click="change">改变然后查看computed值</button>
    <ul>
      <li v-for="(item, i) in newList" :key="i">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
// computed用来监控自己定义的变量，该变量不在data里面声明，直接在computed里面定义，然后就可以在页面上进行双向数据绑定展示出结果或者用作其他处理；
// computed比较适合对多个变量或者对象进行处理后返回一个结果值，也就是数多个变量中的某一个值发生了变化则我们监控的这个值也就会发生变化，
//举例：购物车里面的商品列表和总金额之间的关系，
//只要商品列表里面的商品数量发生变化，或减少或增多或删除商品，总金额都应该发生变化。这里的这个总金额使用computed属性来进行计算是最好的选择
// 与watch之间的区别：

// 什么时候使用watch，什么时候使用computed。这里大致说一下自己的理解：

// watch主要用于监控vue实例的变化，它监控的变量当然必须在data里面声明才可以，它可以监控一个变量，也可以是一个对象
export default {
  name: "computed",
  data: () => {
    return {
      price: 1,
      list: ["Banana", "Orange", "Apple", "Mango"],
    };
  },
  computed: {
    //computed尽量不改变data里面的数据，但可以使用，默认使用的是get方法，也可以使用set方法，就是在computed里面的数据发生改变的时候会被监听到。
    newPrice: {
      get: function () {
        var pricen = "&" + this.price + "钱";
        return pricen;
      },
      //set方法一般不会被使用到，一般情况我们computed里面的值都是依赖data里面的值，data更新则computed值更新
      set: function (newdata) {
        console.log("set方法被调用了"); //直接改变this.newPrice时调用
        console.log(newdata);
        this.price = newdata;
      },
    },
    newList: function () {
      var newlist = this.list;
      console.log(newlist);
      return newlist.reverse();
    },
  },
  methods: {
    change: function () {
      this.newPrice = "120";
    },
  },
};
</script>

<!-- 加入 "scoped" 目的是让样式在这个组件中私有化，即样式只限制在本组件中，这样可以避免与外界样式出现混淆的现象。 -->
<style scoped lang="scss"></style>
