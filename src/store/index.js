import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'

import categories from './modules/categories'

Vue.use(Vuex)

const state = {
  currentDepth: 5,
  currentBrowseNode: null,
  // {
  //   name: 'Tops & Tees',
  //   nodeId: '2368343011'
  // },
  titles: [],
  dictionary: [],
  wordCloud: []
}

const getters = {
  titles: state => state.titles,
  dictionary: state => state.dictionary,
  wordCloud: state => state.wordCloud
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
