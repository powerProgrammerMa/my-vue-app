<template>
  <div>
    <div class="title">vue路由钩子</div>
    <div @click="go">前进</div>
    <div @click="goback">后退</div>
    <button @click="gonews">到新闻页</button>
  </div>
</template>
<script>
export default {
  name: "Router",
  data: () => {
    return {};
  },
  beforeRouteEnter(to, from, next) {
    console.log(to, from);
    next(); //这里也可以写跳转
  },
  computed: {},
  methods: {
    go() {
      this.$router.go(1);
    },
    goback() {
      this.$router.go(-1);
    },
    gonews() {
      this.$router.push("/params/2/3");
    },
  },
  components: {},
};
</script>
<style></style>
