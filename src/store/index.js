import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'

import categories from './modules/categories'

Vue.use(Vuex)

const state = {
  currentDepth: 6,
  // selectedNodes: [],
  submissions: [],
  topSellers: [],
  attributes: []
}

const store = new Vuex.Store({
  state,
  modules: {
    categories
  },
  actions,
  mutations
})

export default store
