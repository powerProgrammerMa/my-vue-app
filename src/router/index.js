/*
 * @Author: your name
 * @Date: 2021-04-13 16:45:33
 * @LastEditTime: 2021-04-25 10:37:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue2.0\my-vue-app\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/if_show",
    name: "If_Show",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/v-show_v-if.vue"),
  },
  {
    path: "/v-for",
    name: "V_for",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/v-for.vue"),
  },
  {
    path: "/text_html",
    name: "V_Text/html",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/v-text_v-html.vue"),
  },
  {
    path: "/v-on",
    name: "V_on",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/v-on.vue"),
  },
  {
    path: "/v-model",
    name: "V_model",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/v-model.vue"),
  },
  {
    path: "/v-bind",
    name: "V_bind",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/v-bind.vue"),
  },
  {
    path: "/v-pre_cloak_once",
    name: "V_pre_cloak_once",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/v-pre_cloak_once.vue"),
  },
  {
    path: "/API",
    name: "API",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/API"),
  },
  {
    path: "/????????????",
    name: "????????????",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/????????????.vue"),
  },
  {
    path: "/component",
    name: "component",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/component.vue"),
  },
  {
    path: "/component2",
    name: "component2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/component2.vue"),
  },
  {
    path: "/component3",
    name: "component3",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/component3.vue"),
  },
  {
    path: "/component4",
    name: "component4",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/component4.vue"),
  },
  {
    path: "/component5",
    name: "component5",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/component5??????????????????.vue"
      ),
  },
  {
    path: "/Option",
    name: "Option",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/???????????????"),
  },
  {
    path: "/child",
    name: "child",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/vueRouter/?????????"),
    children: [
      {
        path: "child1",
        name: "child1",
        component: () =>
          import(/* webpackChunkName: "about" */ "../components/childrouter"),
      },
      {
        path: "child2",
        name: "child2",
        component: () =>
          import(/* webpackChunkName: "about" */ "../components/childrouter2"),
      },
    ],
  },
  {
    path: "/morerouterview",
    name: "more",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/vueRouter/??????routerview.vue"
      ),
    children: [
      {
        path: "morechild",
        components: {
          left: () =>
            import(
              /* webpackChunkName: "about" */ "../components/???routerview??????/child1.vue"
            ),
          right: () =>
            import(
              /* webpackChunkName: "about" */ "../components/???routerview??????/child2.vue"
            ),
        },
      },
    ],
  },
  {
    path: "/params/:newsId/:newsTitle",
    name: "params",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/vueRouter/url??????.vue"),
  },
  {
    path: "/router",
    name: "router",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/vueRouter/????????????.vue"),
  },
  {
    path: "/routergo",
    name: "routergo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/vueRouter/????????????.vue"),
  },
  {
    path: "/vuexshow",
    name: "vuexshow",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/vueX/??????vuex??????.vue"),
  },
  {
    path: "/vuexshow2",
    name: "vuexshow2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/vueX/??????vuex??????????????????.vue"
      ),
  },
  {
    path: "/getters",
    name: "getters",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/vueX/getters.vue"
      ),
  },
  {
    path: "/actions",
    name: "actions",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/vueX/actions.vue"
      ),
  },
  {
    path: "/brother1",
    name: "brother1",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/??????????????????/Parent.vue"
      ),
  },
 
  //??????404??????
  // {
  //   path: "*",
  //   component: errPage
  // }
];

const router = new VueRouter({
  routes,
});

export default router;
