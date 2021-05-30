<template>
  <div>
    <div class="title">vuex数据</div>
    <button @click="show">打印</button>
    <div>{{ $store.state.count }}</div>
    <button @click="$store.commit('add', 10)">+</button>
    <button @click="$store.commit('reduce')">-</button>
  </div>
</template>
<script>
//先引入mapState，通过对象扩展符注入计算属性，直接用this调用
//其实组件里面可以通过this.$store访问所有的state、mutation、action等等 用引入可以缩短代码，只是为了节省写的时间
export default {
  name: "Router",
  data: () => {
    return {};
  },

  computed: {},
  methods: {
    show() {
      //直接就可以用了
      console.log(this.$store.state.count);
      console.log(this.$store);
    },
  },
  components: {},
};
</script>
<style></style>
