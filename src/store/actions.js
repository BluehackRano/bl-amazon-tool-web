import {
  getAdvertisingBrowseNode,
  getToolTitles,
  getDictionaryBrowseNodesAll,
  getDictionaryWords,
  postDictionarySubAttrsWordsCountReset,
  getDictionaryWordsFiltered,
  getDictionarySubAttrsWords,
  getDictionaryProductsAttrs,
  getDictionaryProductsAttrsSubAttrs,
  getDictionaryProductsAttrsSubAttrsWords,
  postDictionaryProductsAttrs,
  postDictionaryProductsAttrsSubAttrs,
  postDictionaryProductsAttrsSubAttrsWords,
  getProductBrowseNodeAttributes
} from '../api'

import * as mutationType from './mutation-types'

export default {
  requestGetAdvertisingBrowseNode: ({ commit }, { cate, node }) => {
    // console.log(node)
    commit(mutationType.SET_CURRENT_BROWSE_NODE, {node})
    return getAdvertisingBrowseNode(node.nodeId)
      .then(data => {
        if (data.children) {
          commit(mutationType.UPDATE_CATEGORY, {cate, node, children: data.children})
          let currentDepth = cate.depth + 1
          commit(mutationType.SET_CURRENT_DEPTH, currentDepth)
        }
      })
      .catch((e) => {
        console.log(e.message)
      })
  },
  requestGetToolTitles: ({ commit }, { node }) => {
    return getToolTitles(node.nodeId)
      .then(data => {
        let titles = data.titles
        commit(mutationType.SET_TITLES, {titles})
      })
      .catch((e) => {
        console.log(e.message)
      })
  },
  requestGetProductsBrowseNodeAttributes: ({ commit }, { node }) => {
    return getProductBrowseNodeAttributes(node.nodeId)
      .then(data => {
        commit(mutationType.SET_DICTIONARY, {node, data})
      })
      .catch((e) => {
        console.log(e.message)
      })
  },
  requestGetDictionaryBrowseNodesAll: ({ commit }, { node }) => {
    return getDictionaryBrowseNodesAll(node.nodeId)
      .then(data => {
        commit(mutationType.SET_DICTIONARY, {node, data})
      })
      .catch((e) => {
        console.log(e.message)
      })
  },
  requestGetDictionaryWords: ({ commit }, { nodeIds }) => {
    console.log(nodeIds)
    return new Promise((resolve, reject) => {
      getDictionaryWords(nodeIds)
        .then(data => {
          // console.log(data)
          // commit(mutationType.SET_DICTIONARY, {node, data})
          resolve(data)
        })
        .catch((e) => {
          console.log(e.message)
          reject(e)
        })
    })
  },
  requestPostDictionarySubAttrsWordsCountReset: ({ commit }, { subAttrIds }) => {
    return new Promise((resolve, reject) => {
      postDictionarySubAttrsWordsCountReset(subAttrIds)
        .then(data => {
          resolve(data)
        })
        .catch((e) => {
          console.log(e.message)
          reject(e)
        })
    })
  },
  requestGetDictionaryWordsFiltered: ({ commit }, { currentBrowseNode, words }) => {
    return getDictionaryWordsFiltered(currentBrowseNode.nodeId, words)
      .then(data => {
        // console.log(data)
        let words = data.words
        commit(mutationType.SET_WORD_CLOUD, { words })
      })
      .catch((e) => {
        console.log(e.message)
      })
  },
  requestGetDictionarySubAttrsWords: ({ commit }, { subAttrIds }) => {
    return getDictionarySubAttrsWords(subAttrIds)
      .then(data => {
        let newCount = new Map()
        for (let i = 0; i < data.length; i++) {
          newCount.set(data[i].dic_word, parseInt(data[i].count))
        }
        commit(mutationType.RESET_DIC_WORD_COUNT, { newCount })
      })
      .catch((e) => {
        console.log(e.message)
      })
  },

  requestGetDictionaryProductsAttrs: ({ commit }, { nodeId, attrId }) => {
    return new Promise((resolve, reject) => {
      getDictionaryProductsAttrs(nodeId, attrId)
        .then(data => {
          resolve(data)
        })
        .catch((e) => {
          console.log(e.message)
          reject(e)
        })
    })
  },
  requestGetDictionaryProductsAttrsSubAttrs: ({ commit }, { nodeId, attrId, subAttrId }) => {
    return new Promise((resolve, reject) => {
      getDictionaryProductsAttrsSubAttrs(nodeId, attrId, subAttrId)
        .then(data => {
          resolve(data)
        })
        .catch((e) => {
          console.log(e.message)
          reject(e)
        })
    })
  },
  requestGetDictionaryProductsAttrsSubAttrsWords: ({ commit }, { nodeId, attrId, subAttrId, word }) => {
    return new Promise((resolve, reject) => {
      getDictionaryProductsAttrsSubAttrsWords(nodeId, attrId, subAttrId, word)
        .then(data => {
          resolve(data)
        })
        .catch((e) => {
          console.log(e.message)
          reject(e)
        })
    })
  },

  requestPostDictionaryProductsAttrs: ({ commit }, { nodeId, attrId, attrUsName, attrKrName }) => {
    return new Promise((resolve, reject) => {
      postDictionaryProductsAttrs(nodeId, attrId, attrUsName, attrKrName)
        .then(data => {
          resolve(data)
        })
        .catch((e) => {
          console.log(e.message)
          reject(e)
        })
    })
  },
  requestPostDictionaryProductsAttrsSubAttrs: ({ commit }, { nodeId, attrId, subAttrId, subAttrUsName, subAttrKrName }) => {
    return new Promise((resolve, reject) => {
      postDictionaryProductsAttrsSubAttrs(nodeId, attrId, subAttrId, subAttrUsName, subAttrKrName)
        .then(data => {
          resolve(data)
        })
        .catch((e) => {
          console.log(e.message)
          reject(e)
        })
    })
  },
  requestPostDictionaryProductsAttrsSubAttrsWords: ({ commit }, { nodeId, attrId, subAttrId, word }) => {
    return new Promise((resolve, reject) => {
      postDictionaryProductsAttrsSubAttrsWords(nodeId, attrId, subAttrId, word)
        .then(data => {
          resolve(data)
        })
        .catch((e) => {
          console.log(e.message)
          reject(e)
        })
    })
  }
}
