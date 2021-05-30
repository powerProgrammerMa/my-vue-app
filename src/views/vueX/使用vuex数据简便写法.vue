<template>
  <div>
    <div class="title">vuex数据简便写法</div>
    <button @click="show">打印</button>
    <div>{{ count }}</div>
    <button @click="add(10)">+</button>
    <button @click="reduce">-</button>
  </div>
</template>
<script>
//先引入mapState，通过对象扩展符注入计算属性，直接用this调用
//其实组件里面可以通过this.$store访问所有的state、mutations、action等等 用引入可以缩短代码，只是为了节省写的时间
import { mapMutations, mapState } from "vuex"; //先引入
export default {
  name: "Router",
  data: () => {
    return {};
  },
  beforeRouteEnter(to, from, next) {
    console.log(to, from);
    next(); //这里也可以写跳转
  },
  computed: {
    //注入计算属性里面，第一种写法
    // ...mapState({
    //   count:state=>state.count
    // }),
    // 注入计算属性里面，第二种写法
    ...mapState(["count"]),
  },
  methods: {
    ...mapMutations(["add", "reduce"]),
    show() {
      //直接就可以用了
      console.log(this.count);
      console.log(this.$store);
    },
  },
  components: {},
};
</script>
<style></style>
