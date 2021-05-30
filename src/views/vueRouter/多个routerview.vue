<template>
  <div>
    <router-link to="/morerouterview/morechild">显示多个child</router-link>

    <div class="title">vue多router-view</div>
    <router-view name="left"></router-view>
    <router-view name="right"></router-view>
  </div>
</template>
<script>
export default {
  name: "childRouterss",
  data: () => {
    return {};
  },
  methods: {},
  created: function () {},
  components: {},
};
</script>
<style></style>
