<!--
 * @Author: Dee.Xiao
 * @Date: 2022-08-11 23:31:06
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-08-12 00:00:57
 * @Description: 
-->
<template>
  <button @click="toggle" :class="{ checked }">
    <span></span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const checked = ref(false)
const toggle = () => {
  checked.value = !checked.value
}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: grey;
  border-radius: $h/2;
  position: relative;
}
span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2 / 2;
  transition: left 250ms;
}
button.checked {
  background: blue;
}
button.checked > span {
  left: calc(100% - #{$h2} - 2px);
}
button:focus {
  outline: none;
}
</style>
