/*
 * @Author: Dee.Xiao
 * @Date: 2022-08-11 12:25:31
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-08-11 13:34:52
 * @Description:
 */
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import DeeXiao from './components/DeeXiao.vue'
import DeeXiao2 from './components/DeeXiao2.vue'

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    {
      path: '/', component: DeeXiao
    },
    {
      path: '/xxx', component: DeeXiao2,
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
