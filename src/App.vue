<!--
 * @Author: Dee.Xiao
 * @Date: 2022-08-11 12:25:31
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-08-11 20:27:14
 * @Description: 
-->
<template>
  <router-view />
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'

const menuVisible = ref(false)
provide('menuVisible', menuVisible)
</script>
