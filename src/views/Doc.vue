<!--
 * @Author: Dee.Xiao
 * @Date: 2022-08-11 16:05:30
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-08-11 18:13:13
 * @Description: 
-->
<template>
  <div>
    <Topnav />
    <div class="content">
      <aside>边栏</aside>
      <main>主内容</main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
  components: { Topnav },
}
</script>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
