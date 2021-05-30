import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  //用于数据存储
  state: {
    count: 1,
    num:100
  },
  //用于改变state数据
  mutations: {
    add(state, n) {
      state.count += n;
    },
    reduce(state) {
      state.count--;
    },
  },
  //其实跟计算属性选项很类似就是做数据过滤的,可以认为是 store 的计算属性
  getters:{
    countx:(state)=>{
      var c = state.num +state.count
      return c;
    }
  },
  //异步修改状态，作用与mutations一样只是这里一般是用于异步修改的,context可以理解为就是我们的store
  actions: {
    addAction(context,nunmber){
      var timer =  setTimeout(() => {
        context.commit("add",20)
        clearTimeout(timer)
      }, nunmber);
    }
  },
  modules: {},
});
