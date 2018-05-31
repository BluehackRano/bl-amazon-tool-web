import Vue from 'vue'
import Router from 'vue-router'
import Category from '@/components/Category'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/category',
      name: 'Category',
      component: Category
    }
  ]
})
