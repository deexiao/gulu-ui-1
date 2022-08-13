<!--
 * @Author: Dee.Xiao
 * @Date: 2022-08-11 22:05:55
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-08-13 10:44:20
 * @Description: 
-->
<template>
  <Switch v-model:value="buttonStatus" />
  <div v-if="buttonStatus">
    <div class="buttonStatusOn">{{ buttonStatus }}</div>
  </div>
  <div v-else>
    <div class="buttonStatusOff">{{ buttonStatus }}</div>
  </div>
</template>

<script setup lang="ts">
import Switch from '../lib/Switch.vue'
import { ref } from 'vue'

const buttonStatus = ref(false)
</script>

<style lang="scss" scoped>
.buttonStatusOn {
  margin-top: 10px;
  color: #1890ff;
}
.buttonStatusOff {
  margin-top: 10px;
  color: #bfbfbf;
}
</style>
