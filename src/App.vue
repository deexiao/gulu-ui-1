<!--
 * @Author: Dee.Xiao
 * @Date: 2022-08-11 12:25:31
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-08-11 21:41:22
 * @Description: 
-->
<template>
  <router-view />
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'

const width = document.documentElement.clientWidth
const menuVisible = ref(width <= 600 ? false : true)
provide('menuVisible', menuVisible)
</script>
