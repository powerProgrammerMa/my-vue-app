<template>
  <div>
    <div class="title">vue路由钩子</div>
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
  methods: {},
  components: {},
};
</script>
<style></style>
