<!--
 * @Author: Dee.Xiao
 * @Date: 2022-08-11 16:05:38
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-08-11 18:02:01
 * @Description: 
-->
<template>
  <div>
    <div class="top-nav">
      <div class="logo">LOGO</div>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </div>
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

<style lang="scss" scoped>
.top-nav {
  background: pink;
  display: flex;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>
