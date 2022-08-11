/*
 * @Author: Dee.Xiao
 * @Date: 2022-08-11 12:25:31
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-08-11 17:00:59
 * @Description:
 */
import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import { createWebHashHistory, createRouter } from 'vue-router'
import Doc from './views/Doc.vue'
import Home from './views/Home.vue'

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    {
      path: '/', component: Home
    },
    {
      path: '/doc', component: Doc,
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
