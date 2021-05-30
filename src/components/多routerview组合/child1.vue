<template>
  <div>
    <div class="title">多router-view1</div>
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
