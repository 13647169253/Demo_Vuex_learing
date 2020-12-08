<template>
  <div>
    <!-- #4 将映射好的数据直接在模板中使用 -->
    <h3>当前的count值为: {{ count }}</h3>
    <h3>{{ showNum }}</h3>
    <button @click="subHandle">点击　　-1　</button>
    &nbsp;
    <button @click="subHandle2">点击　　-N　</button>
    &nbsp;
    <!-- 在通过映射后,映射的方法挂载在了自己的methods中可以直接使用 -->
    <button @click="subAsync()">异步　　-1　</button>
    &nbsp;
    <button @click="subAsyncS(7)">异步　　-N　</button>
  </div>
</template>

<script>
// #1 先导入mapState , mapMutations , mapActions
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  created() {},
  methods: {
    ...mapMutations(['sub', 'subS']),
    ...mapActions(['subAsync', 'subAsyncS']),
    subHandle() {
      this.sub()
    },
    subHandle2() {
      this.subS(7)
    },
  },
  // #2 全局数据,映射为当前组件的计算属性
  computed: {
    // #3 调用mapState;对需要使用的全局数据进行映射,并展开返回值
    ...mapState(['count']),
    ...mapGetters(['showNum']),
  },
}
</script>

<style lang="less" scoped>
</style>