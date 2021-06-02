<!--
 兄弟组件之间的传值和父子组件之间的传值非常相似，都是通过$emit;
原理是：vue一个新的实例，类似于一个站，连接着两个组件，也就是一个中央事件总线；
  1.引入bus,接着绑定数据传输事件
    我们通过一个$emit自定义一个事件(sendMessTobother2)，并传递数据；
    $emit实例方法触发当前实例(这里的当前实例就是bus)上的事件,附加参数都会传给监听器回调。
    另外一边呢:在组件的mounted里，我们监听了sendMessTobother2事件，并把传递过来的事件通过$on监听回调函数；

    简单来说一方通过$emit发送数据,另一方通过$on监听数据
    bus.$emit("sendMessTobother2",12);
    bus.$on("sendMessTobother2",(msg)=>{
      this.get_age = msg
    })
-->
<template>
  <div>
    <div class="title">vue 组件兄弟组件之间通讯</div>
    <Brother2></Brother2>
    <Brother1></Brother1>
  </div>
</template>
<script>
import Brother2 from "./brother2"
import Brother1 from "./brother1"
export default {
  name: "brother1",
  data: () => {
    return {
      txt: "brother1组件原来年龄",
      brother1_parentAge: 12,
    };
  },
  components: {
    Brother2:Brother2,
    Brother1:Brother1
  }
 
};
</script>
<style></style>
