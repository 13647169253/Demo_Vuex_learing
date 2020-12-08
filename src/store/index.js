import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* Store是唯一的公共数据源,所有共享的数据都要统一放到Store的state中储存 */
export default new Vuex.Store({
  state: {
    count: 0
  },
  // 建议通过 mutations 中的函数对state中的数据进行修改
  mutations: {
    add(state) {
      state.count++
      // 不要再mutations中执行异步函数;在Action处理异步函数
      // setInterval(() => {
      //   state.count++
      // }, 500)
    },
    addS(state, step) {
      state.count += step
    },
    sub(state) {
      state.count--
    },
    subS(state, step) {
      state.count -= step
    }
  },
  actions: {
    // context,大致可看作 Vuex.Store 实例对象;但是也是通过触发mutation的方式间接修改数据.
    addAsync(context) {
      setTimeout(() => {
        context.commit('add')
      }, 500);
    },
    addAsyncS(context, step) {
      setTimeout(() => {
        context.commit('addS', step)
      }, 500);
    },
    subAsync(context) {
      setTimeout(() => {
        context.commit('sub')
      }, 500);
    },
    subAsyncS(context, step) {
      setTimeout(() => {
        context.commit('subS', step)
      }, 500);
    }
  },
  // Getter 可以对Store中的数据进行加工形成新的数据不会影响原数据,类似于计算属性
  // Store 中数据的变化会回影响Getter中的数据
  getters: {
    showNum(state) {
      return `最新数据: ${state.count}`
    }
  },
  modules: {
  }
})
