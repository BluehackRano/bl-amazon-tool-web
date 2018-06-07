export default {
  SET_CURRENT_DEPTH (state, currentDepth) {
    state.currentDepth = currentDepth
  },

  SET_CURRENT_BROWSE_NODE (state, currentBrowseNode) {
    state.currentBrowseNode = {}
    state.currentBrowseNode.nodeId = currentBrowseNode.node.nodeId
    state.currentBrowseNode.name = currentBrowseNode.node.name
  },

  SET_TITLES (state, titles) {
    state.titles = []
    for (let i = 0; i < titles.titles.length; i++) {
      state.titles.push(titles.titles[i])
    }
  },

  RESET_DICTIONARY (state) {
    state.dictionary = []
  },

  SET_DICTIONARY (state, dictItem) {
    for (let i = 0; i < dictItem.data.length; i++) {
      for (let j = 0; j < dictItem.data[i].sub_attrs.length; j++) {
        for (let k = 0; k < dictItem.data[i].sub_attrs[j].title_dics.length; k++) {
          let aDict = {}
          aDict.node_id = dictItem.node.nodeId

          aDict.attr_id = dictItem.data[i].attr.attr_id
          aDict.attr_us_name = dictItem.data[i].attr.attr_us_name
          aDict.attr_kr_name = dictItem.data[i].attr.attr_kr_name

          aDict.sub_attr_id = dictItem.data[i].sub_attrs[j].sub_attr.sub_attr_id
          aDict.sub_attr_us_name = dictItem.data[i].sub_attrs[j].sub_attr.sub_attr_us_name
          aDict.sub_attr_kr_name = dictItem.data[i].sub_attrs[j].sub_attr.sub_attr_kr_name

          aDict.dic_word = dictItem.data[i].sub_attrs[j].title_dics[k].dic_word
          // aDict.count = parseInt(dictItem.data[i].sub_attrs[j].title_dics[k].count)

          state.dictionary.push(aDict)
        }
      }
    }
  },
  SET_WORD_CLOUD (state, words) {
    let aWords = words.words
    state.wordCloud = []
    for (let i = 0; i < aWords.length; i++) {
      let aWord = {}
      aWord.text = aWords[i].text
      aWord.count = parseInt(aWords[i].count)
      state.wordCloud.push(aWord)
    }
  },
  RESET_DIC_WORD_COUNT (state, newCount) {
    // console.log(newCount)
    for (let i = 0; i < state.dictionary.length; i++) {
      state.dictionary[i].count = newCount.newCount.get(state.dictionary[i].dic_word)
    }
  },
  SET_SUBMISSIONS (state, submissions) {
    console.log(submissions)
    state.submissions.splice(0, state.submissions.length)
    for (var i = 0; i < submissions.length; i++) {
      state.submissions.push(submissions[i])
    }
  },

  SET_TOP_SELLERS (state, topSellers) {
    state.topSellers.splice(0, state.topSellers.length)
    for (var i = 0; i < topSellers.length; i++) {
      state.topSellers.push(topSellers[i])
    }
  },

  SET_ATTRIBUTES (state, attributes) {
    state.attributes.splice(0, state.attributes.length)
    for (var i = 0; i < attributes.length; i++) {
      state.attributes.push(attributes[i])
    }
  }
}
