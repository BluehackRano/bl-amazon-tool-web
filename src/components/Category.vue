<template>
  <div class="category-container">
    <span class="category-container-span">BROWSE NODE</span>
    <br><br>

    <div class="category-select-wrapper">

      <template
        v-for="(cate, index) in categories">
        <div
          v-if="cate.depth <= currentDepth && cate.nodes.length > 0"
          class="category-select">
          <div class="category-select-inner">
            <div class="category-select-inner-header">
              <span>{{ cate.label }}</span> <span v-if="cate.selected">({{ cate.selected.nodeId }})</span>
            </div>
            <div class="category-select-inner-body">
              <div
                v-for="(node, index) in cate.nodes"
                class="category-select-item">
                <a
                  :class="{ active: cate.selected && cate.selected.nodeId === node.nodeId }"
                  @click="categorySelected(cate, node)"
                >
                  <span>&nbsp;{{ node.name }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </template>

    </div>
    <div class="category-button-wrapper">
      <button class="select-button" @click="completeButtonClicked">선택완료</button>
    </div>
  </div>
</template>

<script>
import{
  mapGetters,
  mapState
//  mapActions
} from 'vuex'

export default {
  name: 'Category',
  computed: {
    ...mapGetters([
      'categories'
    ]),
    ...mapState([
      'currentDepth',
      'currentBrowseNode'
    ])
  },
  methods: {
    categorySelected (cate, node) {
      this.$store.dispatch('requestGetAdvertisingBrowseNode', {
        cate: cate,
        node: node
      }).then(() => {
        console.log('done requestGetAdvertisingBrowseNode()')
      })
    },
    completeButtonClicked () {
      let cates = []
      for (let i = 0; i < this.categories.length; i++) {
        if (this.categories[i].selected) {
          cates.push(this.categories[i].selected)
        }
      }
      alert (JSON.stringify(this.currentBrowseNode))
      this.$router.push({ name: 'Filter' })
    }
  }
}
</script>

<style lang="scss" scoped>
.category-container {
  margin: 0 auto;
  padding-top: 50px;
  width: 80vw;
  height: 100vh;
  min-width: 1000px;

  .category-select-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    .category-select {
      padding: 3px;
      height: 350px;
      min-height: 350px;

      .category-select-inner {
        width: 100%;
        height: 100%;
        border: solid 1px #c0c0c0;

        .category-select-inner-header {
          padding-left: 13px;
          height: 40px;
          border-bottom: solid 1px #c0c0c0;

          span {
            line-height: 40px;
            font-weight: bold;
          }
        }

        .category-select-inner-body {
          position: relative;
          width: 100%;
          height: 300px;
          overflow-y: auto;

          .category-select-item {
            padding: 2px;
            width: 100%;
            height: 40px;

            a {
              display: inline-block;
              width: 100%;
              height: 36px;
              border-radius: 4px;
              &:hover {
                background-color: lightgray;
              }
              &:active {
                background-color: gray;
              }

              span {
                color: black;
                font-size: 12px;
                line-height: 36px;
              }
            }
            a.active {
              background-color: gray;
            }
          }
        }
      }
    }
  }
  span.category-container-span {
    margin-left: 5px;
    font-size: 20px;
    font-weight: bold;
  }

  .category-button-wrapper {
    position: relative;
    bottom: 0;
    margin-top: 100px;
    margin-bottom: 55px;
    height: 50px;
    text-align: center;
    .select-button {
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
