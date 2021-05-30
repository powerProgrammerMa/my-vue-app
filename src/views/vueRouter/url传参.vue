<template>
  <div>
    <div class="title">url传参</div>
    <div>{{ $route.params.newsId }}----{{ $route.params.newsTitle }}</div>
  </div>
</template>
<script>
export default {
  name: "childRouter",
  data: () => {
    return {};
  },
  methods: {},
  created: function () {
    console.log(this.$route);
  },
  components: {},
};
</script>
<style></style>
