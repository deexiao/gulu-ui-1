/*
 * @Author: Dee.Xiao
 * @Date: 2022-08-11 22:04:01
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-08-11 22:20:41
 * @Description: 
 */
import { createWebHashHistory, createRouter } from 'vue-router'
import SwitchDemo from './components/SwitchDemo.vue'
import Doc from './views/Doc.vue'
import Home from './views/Home.vue'

const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes: [
    {
      path: '/', component: Home
    },
    {
      path: '/doc', component: Doc, children: [
        {
          path: 'Switch', component: SwitchDemo
        }
      ],
    }
  ]
})