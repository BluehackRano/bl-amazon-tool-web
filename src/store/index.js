import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'

import categories from './modules/categories'

Vue.use(Vuex)

const state = {
  // currentDepth: 5,
  currentDepth: 6, // TODO: comment this
  currentBrowseNode: // null
  // TODO: comment these
  {
    name: 'Tops & Tees',
    nodeId: '2368343011'
  },
  titles: [],
  submissions: [],
  topSellers: [],
  attributes: []
}

const getters = {
  titles: state => state.titles
}

const store = new Vuex.Store({
  state,
  modules: {
    categories
  },
  actions,
  mutations,
  getters
})

export default store
