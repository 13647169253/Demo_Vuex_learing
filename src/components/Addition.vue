<template>
  <!-- template中可以省略this 使用this.$store.state.<> 来进行访问-->
  <div>
    <h3>当前的count值为: {{ $store.state.count }}</h3>
    <h3>{{ $store.getters.showNum }}</h3>
    <button @click="addHandle">点击　+1　</button>
    &nbsp;
    <button @click="addHandle2">点击　+N　</button>
    &nbsp;
    <button @click="addHandle3">异步　+1　</button>
    &nbsp;
    <button @click="addHandle4">异步　+N　</button>
  </div>
</template>

<script>
/* 组件中访问State中数据的方式 this.$store.state.<> */
export default {
  data() {
    return {}
  },
  created() {},
  methods: {
    addHandle() {
      // this.$store.state.count++
      // 在组件中使用 Mutation 来进行变更Store中的数据;Mutation可以集中监控数据变化,方便后期维护.在store中定义
      // commit 用于调用 Mutation 中的函数,参数为调用的函数名
      this.$store.commit('add')
    },
    addHandle2() {
      this.$store.commit('addS', 7)
    },
    addHandle3() {
      // dispatch 用于调用 Action 用的函数
      this.$store.dispatch('addAsync')
    },
    addHandle4() {
      // dispatch 用于调用 Action 用的函数
      this.$store.dispatch('addAsyncS', 7)
    },
  },
}
</script>

<style lang="less" scoped>
</style>