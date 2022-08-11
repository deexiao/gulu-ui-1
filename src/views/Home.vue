<!--
 * @Author: Dee.Xiao
 * @Date: 2022-08-11 16:05:38
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-08-11 18:13:02
 * @Description: 
-->
<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>轱辘UI</h1>
      <h2>一个厉害的 UI 框架</h2>
      <p class="actions">
        <a>GitHub</a>
        <a>开始</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
  components: { Topnav },
}
</script>

<style lang="scss" scoped></style>
