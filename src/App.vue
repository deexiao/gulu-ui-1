<!--
 * @Author: Dee.Xiao
 * @Date: 2022-08-11 12:25:31
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-08-11 13:36:40
 * @Description: 
-->
<template>
  <div>导航栏</div>
  <router-link to="/">DeeXiao</router-link> |
  <router-link to="/xxx">DeeXiao2</router-link>
  <hr />
  <router-view />
</template>

<script>
export default {
  name: 'App',
  components: {},
}
</script>
