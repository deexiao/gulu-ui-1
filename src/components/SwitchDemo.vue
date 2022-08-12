<!--
 * @Author: Dee.Xiao
 * @Date: 2022-08-11 22:05:55
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-08-12 19:06:59
 * @Description: 
-->
<template>
  <Switch v-model:value="buttonStatus" />
  {{ buttonStatus }}
</template>

<script setup lang="ts">
import Switch from '../lib/Switch.vue'
import { ref } from 'vue'

const buttonStatus = ref(false)
</script>

<style lang="scss" scoped></style>
