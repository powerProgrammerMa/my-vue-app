<!--
 * @Author: your name
 * @Date: 2021-04-14 16:34:18
 * @LastEditTime: 2021-04-16 15:10:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue2.0\my-vue-app\src\views\v-model.vue
-->
<template>
  <div class="aa">
    <div class="title">v-model</div>

    <p>原始文本信息：{{ message }}</p>
    <p><input type="text" v-model="message" /></p>
    <!-- 修饰符lazy -->
    <p>加入lazy修饰符：{{ message2 }}</p>
    <p><input type="text" v-model.lazy="message2" /></p>
    <!-- 修饰符number -->
    <p>加入number修饰符：{{ message3 }}</p>
    <p><input type="text" v-model.number="message3" /></p>
    <!-- 修饰符trim:去空格 -->
    <p>加入trim修饰符：{{ message4 }}</p>
    <p><input type="text" v-model.trim="message4" /></p>
    <!-- 文本域的双向数据绑定 -->
    <hr />
    <h3>文本域</h3>
    <textarea name="" id="" cols="30" rows="10" v-model="message5"></textarea>
    <hr />
    <h3>多选框绑定一个值</h3>
    <input type="checkbox" id="isTrue" v-model="isTrue" />
    <label for="isTrue">{{ isTrue }}</label>
    <hr />
    <h3>多选框绑定数组</h3>
    <p>
      <input type="checkbox" id="miss" value="miss" v-model="web_names" />
      <label for="miss">miss</label>
      <input type="checkbox" id="saonan" value="saonan" v-model="web_names" />
      <label for="saonan">saonan</label>
      <input type="checkbox" id="PDD" value="PDD" v-model="web_names" />
      <label for="PDD">PDD</label>
      <input type="checkbox" id="QUQU" value="QUQU" v-model="web_names" />
      <label for="QUQU">QUQU</label>
    </p>
    <p>{{ web_names }}</p>
    <hr />
    <h3>单选框绑定</h3>
    <p>
      <input type="radio" id="one" value="男" v-model="sex" />
      <label for="one">男</label>
      <input type="radio" id="two" value="女" v-model="sex" />
      <label for="two">女</label>
    </p>
    <p>你选择的性别是：{{ sex }}</p>
  </div>
</template>
<script>
export default {
  name: "v-model",
  data: () => {
    return {
      message: "加油啊小马同学！",
      message2: "wwwww",
      message3: 3,
      message4: "sff",
      message5: "sdasdsadasdasd",
      isTrue: true,
      web_names: [],
      sex: "男",
    };
  },
  methods: {},
};
</script>
<style>
.aa {
  padding: 50px;
  box-sizing: border-box;
}
</style>
