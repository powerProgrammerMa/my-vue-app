/*
 * @Author: your name
 * @Date: 2021-04-13 16:45:33
 * @LastEditTime: 2021-04-25 12:08:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vue-app\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

//混入全局方法，依次内推可以混入全局组件等等
Vue.mixin({
  methods: {
    changejian() {
      this.wendu -= 5;
    },
  },
});
