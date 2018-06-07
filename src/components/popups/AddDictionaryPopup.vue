<template>
  <div class="add-dict-popup-container">
    <div class="add-dict-popup">
      <div class="add-dict-popup-inner-container">
        <br>
        <span class="add-dict-span">단어추가</span>
        <br>

        <div class="add-dict-body-wrapper">

          <div class="add-dict-body header">
            <span>항목</span>
          </div>
          <div class="add-dict-body header">
            <span>ID</span>
          </div>
          <div class="add-dict-body header">
            <span>US_NAME</span>
          </div>
          <div class="add-dict-body header">
            <span>KR_NAME</span>
          </div>

          <div class="add-dict-body body-top">
            <span>BrowseNode</span>
          </div>
          <div class="add-dict-body body">
            <b-select placeholder="Select a name"
                      v-model="browseNodeId"
                      v-on:input="browseNodeChanged">
              <option
                v-for="option in nodes"
                :value="option.nodeId"
                :key="option.nodeId">
                {{ option.nodeId }}
              </option>
            </b-select>
          </div>
          <div class="add-dict-body body">
            <span>{{ browseNodeName }}</span>
          </div>
          <div class="add-dict-body header"></div>

          <div class="add-dict-body body-top">
            <span>Attr</span>
          </div>
          <div class="add-dict-body body"
               ref="attrId">
            <b-field label=""
                     type="">
              <b-input v-model="attrId"></b-input>
            </b-field>
          </div>
          <div class="add-dict-body body"
               ref="attrUsName">
            <b-field label=""
                     type="">
              <b-input v-model="attrUsName"></b-input>
            </b-field>
          </div>
          <div class="add-dict-body body"
               ref="attrKrName">
            <b-field label=""
                     ref="attrKrName"
                     type="">
              <b-input v-model="attrKrName"></b-input>
            </b-field>
          </div>

          <div class="add-dict-body body-top">
            <span>SubAttr</span>
          </div>
          <div class="add-dict-body body"
               ref="subAttrId">
            <b-field label=""
                     type="">
              <b-input v-model="subAttrId"></b-input>
            </b-field>
          </div>
          <div class="add-dict-body body"
               ref="subAttrUsName">
            <b-field label=""
                     type="">
              <b-input v-model="subAttrUsName"></b-input>
            </b-field>
          </div>
          <div class="add-dict-body body"
               ref="subAttrKrName">
            <b-field label=""
                     type="">
              <b-input v-model="subAttrKrName"></b-input>
            </b-field>
          </div>

          <div class="add-dict-body body-top">
            <span>Word</span>
          </div>
          <div class="add-dict-body header">
          </div>
          <div class="add-dict-body body"
               ref="wordUsName">
            <b-field label=""
                     type="">
              <b-input v-model="wordUsName"></b-input>
            </b-field>
          </div>
          <div class="add-dict-body header">
          </div>

        </div>

        <div class="add-dict-button-wrapper">
          <button class="add-dict-button" id="preview"
                  @click="preview">미리보기</button>
          <button class="add-dict-button" id="save"
                  @click="save">저장하기</button>
          <button class="add-dict-button" id="close"
                  @click="closePopup">닫기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as busType from '@/util/bus/bus-types'

  import{
    mapGetters,
    mapState
  } from 'vuex'

  export default {
    name: 'AddDictionaryPopup',
    computed: {
      ...mapGetters([
        'categories'
      ])
    },
    data () {
      return {
        nodes: [],
        browseNodeId: null,
        browseNodeName: null,
        attrId: null,
        attrUsName: null,
        attrKrName: null,
        subAttrId: null,
        subAttrUsName: null,
        subAttrKrName: null,
        wordUsName: null,
        styleObject: {
          normal: {
            backgroundColor: 'white'
          },
          available: {
            backgroundColor: 'green'
          },
          enrolled: {
            backgroundColor: 'red'
          },
          saved: {
            backgroundColor: 'blue'
          }
        }
      }
    },
    created () {
      for (let i = 0; i < this.categories.length; i++) {
        if (this.categories[i].selected) {
          this.nodes.push(this.categories[i].selected)
        }
      }
    },
    methods: {
      browseNodeChanged () {
        for (let i = 0; i < this.nodes.length; i++) {
          if (this.nodes[i].nodeId === this.browseNodeId) {
            this.browseNodeName = this.nodes[i].name
          }
        }
      },
      preview () {
        if (!this.browseNodeId) {
          alert('BrowseNode를 선택하세요 !')
        }
        if (!this.attrId) {
          alert('Attr ID를 입력하세요 !')
        }

        if (this.browseNodeId && this.attrId && this.attrId.trim() !== '' ) {
          this.$refs.attrId.style.backgroundColor = this.styleObject.normal.backgroundColor

          this.$store.dispatch('requestGetDictionaryProductsAttrs', {
            nodeId: this.browseNodeId,
            attrId: this.attrId
          }).then(data => {
            console.log('done requestGetDictionaryProductsAttrs()')

            if (data.data) {
              this.attrUsName = data.data.attr_us_name
              this.attrKrName = data.data.attr_kr_name
              this.$refs.attrId.style.backgroundColor = this.styleObject.enrolled.backgroundColor
            } else {
              this.$refs.attrId.style.backgroundColor = this.styleObject.available.backgroundColor
            }
          })
        }

        if (this.browseNodeId && this.subAttrId && this.subAttrId.trim() !== '' ) {
          this.$refs.subAttrId.style.backgroundColor = this.styleObject.normal.backgroundColor

          this.$store.dispatch('requestGetDictionaryProductsAttrsSubAttrs', {
            nodeId: this.browseNodeId,
            attrId: this.attrId,
            subAttrId: this.subAttrId
          }).then(data => {
            console.log('done requestGetDictionaryProductsAttrsSubAttrs()')

            if (data.data) {
              this.subAttrUsName = data.data.sub_attr_us_name
              this.subAttrKrName = data.data.sub_attr_kr_name
              this.$refs.subAttrId.style.backgroundColor = this.styleObject.enrolled.backgroundColor
            } else {
              this.$refs.subAttrId.style.backgroundColor = this.styleObject.available.backgroundColor
            }
          })
        }

        if (this.browseNodeId && this.subAttrId && this.subAttrId.trim() !== '' && this.wordUsName && this.wordUsName.trim() !== '' ) {
          this.$refs.wordUsName.style.backgroundColor = this.styleObject.normal.backgroundColor

          this.$store.dispatch('requestGetDictionaryProductsAttrsSubAttrsWords', {
            nodeId: this.browseNodeId,
            attrId: this.attrId,
            subAttrId: this.subAttrId,
            word: this.wordUsName
          }).then(data => {
            console.log('done requestGetDictionaryProductsAttrsSubAttrsWords()')

            if (data.data) {
              this.$refs.wordUsName.style.backgroundColor = this.styleObject.enrolled.backgroundColor
            } else {
              this.$refs.wordUsName.style.backgroundColor = this.styleObject.available.backgroundColor
            }
          })
        }
      },
      save () {
        if (!this.browseNodeId) {
          alert('BrowseNode를 선택하세요 !')
        }
        if (!this.attrId) {
          alert('Attr ID를 입력하세요 !')
        }

        this.$refs.attrId.style.backgroundColor = this.styleObject.normal.backgroundColor
        this.$refs.subAttrId.style.backgroundColor = this.styleObject.normal.backgroundColor
        this.$refs.wordUsName.style.backgroundColor = this.styleObject.normal.backgroundColor

        if (this.browseNodeId && this.attrId && this.attrId.trim() !== '' ) {
          // add attr
          if (this.attrUsName && this.attrUsName.trim() !== '' && this.attrKrName && this.attrKrName.trim() !== '') {
            this.$store.dispatch('requestPostDictionaryProductsAttrs', {
              nodeId: this.browseNodeId,
              attrId: this.attrId,
              attrUsName: this.attrUsName,
              attrKrName: this.attrKrName
            }).then(data => {
              console.log('done requestPostDictionaryProductsAttrs()')
              console.log(data)
              if (data) {
                this.$refs.attrId.style.backgroundColor = this.styleObject.saved.backgroundColor
              }
            })
          }
        }

        if (this.browseNodeId && this.subAttrId && this.subAttrId.trim() !== '' ) {
          // add sub_attr
          if (this.subAttrUsName && this.subAttrUsName.trim() !== '' && this.subAttrKrName && this.subAttrKrName.trim() !== '') {
            this.$store.dispatch('requestPostDictionaryProductsAttrsSubAttrs', {
              nodeId: this.browseNodeId,
              attrId: this.attrId,
              subAttrId: this.subAttrId,
              subAttrUsName: this.subAttrUsName,
              subAttrKrName: this.subAttrKrName
            }).then(data => {
              console.log('done requestPostDictionaryProductsAttrsSubAttrs()')
              console.log(data)
              if (data) {
                this.$refs.subAttrId.style.backgroundColor = this.styleObject.saved.backgroundColor
              }
            })
          }
        }

        if (this.browseNodeId && this.attrId && this.attrId.trim() !== '' && this.subAttrId && this.subAttrId.trim() !== '' && this.wordUsName && this.wordUsName.trim() !== '' ) {
          // add title_dic word
          this.$store.dispatch('requestPostDictionaryProductsAttrsSubAttrsWords', {
            nodeId: this.browseNodeId,
            attrId: this.attrId,
            subAttrId: this.subAttrId,
            word: this.wordUsName
          }).then(data => {
            console.log('done requestPostDictionaryProductsAttrsSubAttrsWords()')
            console.log(data)
            if (data) {
              this.$refs.wordUsName.style.backgroundColor = this.styleObject.saved.backgroundColor
            }
          })
        }
      },
      closePopup () {
        this.$bus.$emit(busType.SHOW_ADD_DICT_POPUP, false)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .add-dict-popup-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(1, 1, 1, .5);
    z-index: 2018;
    cursor: default;

    .add-dict-popup {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -250px;
      margin-left: -480px;
      width: 960px;
      min-width: 960px;
      height: 500px;
      min-height: 500px;
      box-shadow: 5px 5px 30px black;
      border-radius: 5px;
      opacity: 1;
      background-color: white;
      z-index: 2019;

      .add-dict-popup-inner-container {
        position: relative;
        margin-left: 30px;
        width: 900px;
        min-width: 900px;
        height: 100%;

        span.add-dict-span {
          width: 89px;
          height: 36px;
          font-family: NotoSansCJKkr;
          font-size: 24px;
          font-weight: 900;
          letter-spacing: 0;
          color: #000000;
        }

        .add-dict-body-wrapper {
          margin-top: 15px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);

          .add-dict-body {
            padding: 3px;
            height: 60px;
            min-height: 60px;
            border: solid 1px #c0c0c0;
          }

          .header {
            text-align: center;
            background-color: #f3f3f3;
            span {
              line-height: 60px;
              font-family: NotoSansCJKkr;
              font-size: 20px;
              font-weight: 900;
              letter-spacing: 0;
              color: #000000;
            }
          }
          .body-top {
            text-align: center;
            span {
              line-height: 60px;
              font-family: NotoSansCJKkr;
              font-size: 20px;
              letter-spacing: 0;
              color: #000000;
            }
          }
        }

        .add-dict-button-wrapper{
          position: relative;
          margin-top: 40px;
          left: 50%;
          margin-left: -243px;

          button.add-dict-button {
            width: 160px;
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
          button#preview {
            background-color: #0084ff;
          }
          button#save {
            background-color: #0062ff;
          }
          button#close {
            background-color: #696969;
          }
        }
      }
    }
  }
</style>
