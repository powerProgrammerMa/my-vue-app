<template>
  <div>
    <div class="title">vuex的getters</div>
    <button @click="show">打印</button>
    <div>count----{{ count }}</div>
    <div>countx----{{countx}}</div>
    <button @click="add(10)">+</button>
    <button @click="reduce">-</button>
    <button @click="addAction(2000)">使用action延时方法</button>
  </div>
</template>
<script>

import { mapMutations, mapState,mapGetters,mapActions } from "vuex"; //先引入
export default {
  name: "actions",
  data: () => {
    return {};
  },
 
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["countx"])
  },
  methods: {
    ...mapMutations(["add", "reduce"]),
    ...mapActions(["addAction"]),
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
