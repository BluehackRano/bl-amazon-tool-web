import Vue from 'vue'
import Router from 'vue-router'
import Category from '@/components/Category'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/filtering'
    },
    {
      path: '/word_cloud'
    }
  ]
})
