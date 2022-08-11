<!--
 * @Author: Dee.Xiao
 * @Date: 2022-08-11 12:25:31
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-08-11 22:20:03
 * @Description: 
-->
<template>
  <router-view />
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import { router } from './router'

const width = document.documentElement.clientWidth
const menuVisible = ref(width <= 600 ? false : true)
// 祖传孙，类似于 set
provide('menuVisible', menuVisible)
// 路由点击后，在手机端隐藏 menu
router.afterEach(() => {
  if (width <= 600) {
    menuVisible.value = false
  }
})
</script>
