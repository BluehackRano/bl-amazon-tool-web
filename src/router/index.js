import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from '@/components/Category'
import Filter from '@/components/Filter'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/category/filter',
      name: 'Filter',
      component: Filter
    },
    {
      path: '/category/word-cloud',
      name: 'WordCloud'
    }
  ]
})
