import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    operationallayers: [],//图层
    basemaps: [],// 底图
    activeIndex: -1, //当前激活的tab导航
    widgetsAtStart: {}, //tab导航数据
  },
  getters: {

  },
  mutations: {
    //更新当前激活的tab索引
    updateaAtiveIndex(state, newVal) {
      state.activeIndex = newVal
    },
    updateBasemaps(state, newVal) {
      state.basemaps = newVal
    },
    updateWidgetsAtStart(state, newVal) {
      state.widgetsAtStart = newVal
    },
    updateOperationallayers(state, newVal) {
      state.operationallayers = newVal
    }
  },
  actions: {

  }
})
