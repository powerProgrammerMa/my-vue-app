<!--
 * @Author: your name
 * @Date: 2021-04-13 16:45:33
 * @LastEditTime: 2021-04-25 10:45:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue2.0\my-vue-app\src\App.vue
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/if_show">if_show</router-link> |
      <router-link to="/v-for">v-for</router-link> |
      <router-link to="/text_html">v-text/v-html</router-link> |
      <router-link to="/v-on">v-on</router-link> |
      <router-link to="/v-model">v-model</router-link> |
      <router-link to="/v-bind">v-bind</router-link> |
      <router-link to="/v-pre_cloak_once">v-pre_cloak_once</router-link> |
      <router-link to="/API">API</router-link> |
      <router-link to="/生命周期">生命周期</router-link> |
      <router-link to="/component">component</router-link> |
      <router-link to="/component2">component2</router-link> |
      <router-link to="/component3">component3</router-link> |
      <router-link to="/component4">component4</router-link> |
      <router-link to="/component5">组件之间通讯</router-link> |
      <router-link to="/Option">选项</router-link> |
      <router-link to="/child">子路由</router-link> |
      <router-link to="/morerouterview">多路由</router-link> |
      <router-link to="/params/2/今日新闻">url传参</router-link> |
      <router-link to="/router">路由钩子</router-link> |
      <router-link to="/routergo">编程导航</router-link> |
      <router-link to="/vuexshow">使用vuex数据</router-link> |
      <router-link to="/vuexshow2">简便使用vuex数据</router-link> |
      <router-link to="/getters">vuex的getters</router-link> |
      <router-link to="/actions">vuex的actions</router-link> |
      <router-link to="/brother1">兄弟组件通讯--兄弟1</router-link> |
      <router-link to="/brother2">兄弟组件通讯--兄弟2</router-link> |
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.title {
  font-size: 30px;
}
</style>
