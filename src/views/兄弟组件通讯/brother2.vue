
<template>
  <div>
    <div>{{ txt }}{{ get_age }}</div>
  </div>
</template>
<script>
import bus from "./bus.js";
export default {
  name: "brother2",
  data: () => {
    return {
      txt: "brother2接收到的年龄:",
      get_age:""
    };
  },
  mounted () {
    bus.$on("sendMessTobother2",(msg)=>{
      this.get_age = msg
    })
  },
};
</script>
<style></style>
