import {
  getAdvertisingBrowseNode,
  getToolTitles
} from '../api'

import * as mutationType from './mutation-types'

export default {
  requestGetAdvertisingBrowseNode: ({ commit }, { cate, node }) => {
    console.log(node)
    commit(mutationType.SET_CURRENT_BROWSE_NODE, {node})
    return getAdvertisingBrowseNode(node.nodeId)
      .then(data => {
        if (data.children) {
          commit(mutationType.UPDATE_CATEGORY, {cate, node, children: data.children})
          let currentDepth = cate.depth + 1
          commit(mutationType.SET_CURRENT_DEPTH, currentDepth)
        }
      })
  },
  requestGetToolTitles: ({ commit }, { node }) => {
    return getToolTitles(node.nodeId)
      .then(data => {
        let titles = data.titles
        commit(mutationType.SET_TITLES, {titles})
      })
  }
}
