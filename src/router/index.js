import Vue from 'vue'
import Router from 'vue-router'
import Category from '@/components/Category'
import Filter from '@/components/Filter'
import Dictionary from '@/components/Dictionary'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/category'
    },
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
      path: '/category/dictionary',
      name: 'Dictionary',
      component: Dictionary
    }
  ]
})
