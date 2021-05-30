<template>
  <div>
    <div class="title">vue子路由</div>
    <div>这是父级</div>
    <router-link to="/child/child1">显示子路由</router-link>
    <!-- 路由传参 -->
    <router-link :to="{ name: 'child2', params: { userid: '1' } }"
      >显示子路由2</router-link
    >
    <div @click="go">22222</div>
    <div>{{ $route.name }}</div>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "childRouter",
  data: () => {
    return {};
  },
  methods: {
    //代码导航
    go: function () {
      this.$router.push({ path: "/child/child1" });
    },
  },
  created: function () {
    console.log(this.$route);
  },
  components: {},
};
</script>
<style></style>
