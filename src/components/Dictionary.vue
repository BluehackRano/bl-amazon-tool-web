<template>
  <div class="dictionary-container">

    <template
      v-for="(cate, index) in categories">
      <template
        v-if="cate.selected">
        <template v-if="index === 0">
          <span>{{ cate.selected.name }}({{ cate.selected.nodeId }})</span>
        </template>
        <template v-else>
          <template v-if="cate.selected.nodeId !== currentBrowseNode.nodeId">
            <span> > {{ cate.selected.name }}({{ cate.selected.nodeId }})</span>
          </template>
          <template v-else>
            <span class="current"> > {{ cate.selected.name }}({{ cate.selected.nodeId }})</span>
          </template>
        </template>
      </template>
    </template>
    <br><br><br>

    <span class="dictionary-container-span">DICTIONARY ({{ dictionary.length }})</span>
    <br><br>

    <div class="dictionary-dic-table-wrapper">
      <b-table :data="dictionary">
        <template slot-scope="props">
          <b-table-column field="node_id" label="BrowseNode" width="40" sortable numeric>
            {{ props.row.node_id }}
          </b-table-column>

          <b-table-column field="attr_us_name" label="ATTRs" sortable>
            {{ props.row.attr_us_name }} ({{ props.row.attr_id }})
          </b-table-column>

          <b-table-column field="sub_attr_us_name" label="SubAttrs" sortable>
            {{ props.row.sub_attr_us_name }} ({{ props.row.sub_attr_id }})
          </b-table-column>

          <b-table-column field="dic_word" label="Words" sortable>
            {{ props.row.dic_word }}
          </b-table-column>

          <template
            v-if="getWordsCountDone">
            <b-table-column field="count" label="Count" sortable numeric>
              {{ props.row.count }}
            </b-table-column>
          </template>

        </template>
      </b-table>
    </div>

    <div class="dictionary-word-cloud-table-wrapper">
      <span>&nbsp;&nbsp;&nbsp;Word Cloud ({{ wordCloud.length }})</span>
      <b-table :data="wordCloud">
        <template slot-scope="props">
          <b-table-column field="text" label="Word" sortable>
            {{ props.row.text }}
          </b-table-column>

          <b-table-column field="count" label="Count" sortable numeric>
            {{ props.row.count }}
          </b-table-column>
        </template>
      </b-table>
    </div>

    <div class="dictionary-button-wrapper">
      <button class="dictionary-button" @click="addDictButtonClicked">단어 추가하기</button>
    </div>


    <add-dictionary-popup
      v-show="showAddDictPopup"></add-dictionary-popup>
  </div>
</template>

<script>
  import AddDictionaryPopup from '@/components/popups/AddDictionaryPopup'
  import * as busType from '@/util/bus/bus-types'

  import{
    mapGetters,
    mapState
  } from 'vuex'

  export default {
    name: 'Dictionary',
    computed: {
      ...mapGetters([
        'categories',
        'dictionary',
        'wordCloud'
      ]),
      ...mapState([
        'currentDepth',
        'currentBrowseNode'
      ])
    },
    components: {
      AddDictionaryPopup
    },
    data () {
      return {
        showAddDictPopup: false,
        getWordsCountDone: false
      }
    },
    created () {
      if (!this.currentBrowseNode) {
        this.$router.push({ name: 'Category' })
        return
      }
      this.$bus.$on(busType.SHOW_ADD_DICT_POPUP, this.showAddDictionryPopup)

      let subAttrIdList = []
      for (let i = 0; i < this.dictionary.length; i++) {
        subAttrIdList.push(this.dictionary[i].sub_attr_id)
      }
      this.$store.dispatch('requestGetDictionarySubAttrsWords', {
        subAttrIds: subAttrIdList
      }).then(() => {
        console.log('done requestGetDictionarySubAttrsWords()')
        this.getWordsCountDone = true
      })

//      this.$store.commit('RESET_DICTIONARY', {})
//      for (let i = 0; i < this.categories.length; i++) {
//        if (this.categories[i].selected) {
//          if (this.categories[i].depth < 5) {
//            continue
//          }
//          this.$store.dispatch('requestGetProductsBrowseNodeAttributes', {
//            node: this.categories[i].selected
//          }).then(() => {
//            console.log('done requestGetProductsBrowseNodeAttributes()')
//          })
//        }
//      }
    },
    methods: {
      addDictButtonClicked () {
        console.log('addDictButtonClicked')
        this.showAddDictionryPopup(true)
      },
      showAddDictionryPopup (show) {
        this.showAddDictPopup = show
      },
    }
  }
</script>

<style lang="scss" scoped>
  .dictionary-container {
    margin: 0 auto;
    padding-top: 50px;
    width: 80vw;
    height: 100%;
    min-width: 1000px;

    span.current {
      font-size: 20px;
      font-weight: bold;
    }

    span.dictionary-container-span {
      margin-left: 5px;
      font-size: 20px;
      font-weight: bold;
    }

    .dictionary-dic-table-wrapper {
      width: 100%;
      height: 400px;
      min-height: 400px;
      overflow-y: auto;
      border: solid 1px #c0c0c0;
    }

    .dictionary-word-cloud-table-wrapper {
      margin-top: 50px;
      width: 100%;
      height: 400px;
      min-height: 400px;
      overflow-y: auto;
      border: solid 1px #c0c0c0;
    }

    .dictionary-button-wrapper {
      position: relative;
      bottom: 0;
      margin-top: 100px;
      margin-bottom: 55px;
      height: 50px;
      text-align: center;
      .dictionary-button {
        width: 360px;
        background-color: #0084ff;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
</style>
