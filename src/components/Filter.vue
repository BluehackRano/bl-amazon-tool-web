<template>
  <div class="filter-container">

    <template
      v-for="(cate, index) in categories">
      <template
        v-if="cate.selected">
        <template v-if="index === 0">
          <span>{{ cate.selected.name }}</span>
        </template>
        <template v-else>
          <template v-if="cate.selected.nodeId !== currentBrowseNode.nodeId">
            <span> > {{ cate.selected.name }}</span>
          </template>
          <template v-else>
            <span class="current"> > {{ cate.selected.name }} ({{ cate.selected.nodeId }})</span>
          </template>
        </template>
      </template>
    </template>
    <br><br>

    <div class="filter-title-wrapper">
      <div class="filter-title-inner">
        <div class="filter-title-inner-header">
          <span>Titles</span> <span v-if="titles">({{ titles.length }})</span>
        </div>
        <div class="filter-title-inner-body">
          <div
            v-for="(title, index) in titles"
            class="filter-title-item">
            <span>{{ (index+1) }}. {{ title }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="filter-button-wrapper">
      <button class="filter-button" @click="filterButtonClicked">걸러내기</button>
    </div>
  </div>
</template>

<script>
  import{
    mapGetters,
    mapState
  } from 'vuex'

  export default {
    name: 'Category',
    computed: {
      ...mapGetters([
        'categories',
        'titles'
      ]),
      ...mapState([
        'currentDepth',
        'currentBrowseNode'
      ])
    },
    created () {
      if (!this.currentBrowseNode) {
        this.$router.push({ name: 'Category' })
        return
      }
      this.$store.dispatch('requestGetToolTitles', {
        node: this.currentBrowseNode
      }).then(() => {
        console.log('done requestGetToolTitles()')
      })
    },
    methods: {
      filterButtonClicked () {
        console.log('filterButtonClicked')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .filter-container {
    margin: 0 auto;
    padding-top: 50px;
    width: 80vw;
    height: 100vh;
    min-width: 1000px;

    .filter-title-wrapper {
      width: 100%;
      height: 400px;
      min-height: 400px;
      /*background-color: gray;*/

      .filter-title-inner {
        width: 100%;
        height: 100%;
        border: solid 1px #c0c0c0;

        .filter-title-inner-header {
          padding-left: 13px;
          height: 40px;
          border-bottom: solid 1px #c0c0c0;

          span {
            line-height: 40px;
          }
        }

        .filter-title-inner-body {
          position: relative;
          width: 100%;
          height: 350px;
          overflow-y: auto;

          .filter-title-item {
            padding: 2px;
            padding-left: 10px;
            width: 100%;
            height: 40px;
            border-bottom: solid 1px lightgray;

            span {
              width: 100%;
              height: 36px;
              color: black;
              font-size: 18px;
              line-height: 36px;
              white-space: nowrap;
            }
          }
        }
      }
    }

    span.current {
      font-size: 20px;
      font-weight: bold;
    }

    .filter-button-wrapper {
      position: relative;
      bottom: 0;
      margin-top: 100px;
      margin-bottom: 55px;
      height: 50px;
      text-align: center;
      .filter-button {
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
