/*
 * @Author: your name
 * @Date: 2021-04-20 15:35:57
 * @LastEditTime: 2021-04-20 15:35:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vue-app\vue.config.js
 */
module.exports = {
  runtimeCompiler: true,
  publicPath:
    process.env.NODE_ENV === "production" ? "/production-sub-path/" : "/",
  devServer: {
    proxy: "http://localhost:4000",
  },
};
