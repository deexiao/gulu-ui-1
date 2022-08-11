<!--
 * @Author: Dee.Xiao
 * @Date: 2022-08-11 23:31:06
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-08-11 23:37:42
 * @Description: 
-->
<template>
  <button><span></span></button>
</template>

<script setup lang="'ts'"></script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: blue;
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
}
</style>
