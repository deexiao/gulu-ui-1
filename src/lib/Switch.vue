<!--
 * @Author: Dee.Xiao
 * @Date: 2022-08-11 23:31:06
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-08-13 00:11:12
 * @Description: 
-->
<template>
  <button @click="toggle" :class="{ checked: value }">
    <span></span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps(['value'])
const emit = defineEmits(['update:value'])
const toggle = () => {
  emit('update:value', !props.value)
}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 250ms;
  }
  &.checked {
    background: #1890ff;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
