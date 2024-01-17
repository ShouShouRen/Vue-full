<template>
  <div>
    <div class="footer_wrap">
      <!-- <a href="#/find">发现音乐</a>
      <a href="#/my">我的音乐</a>
      <a href="#/friend">朋友</a> -->
      <router-link to="/find">發現</router-link>
      <router-link to="/my">我得</router-link>
      <router-link to="/friend">朋友</router-link>
    </div>
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
.footer_wrap {
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
/* 
在 Vue 的路由系統中，`router-link` 元素在被點擊後會獲得兩種 CSS 類別：`router-link-active` 和 `router-link-exact-active`。

- `router-link-active`：這是一種模糊匹配的類別。當 `router-link` 的 `to` 屬性值以特定路徑開頭（例如 "/find"），無論其後是否還有其他路徑（例如 "/find/xxx"），該 `router-link` 都會被加上 `router-link-active` 類別。

- `router-link-exact-active`：這是一種精確匹配的類別。只有當 `router-link` 的 `to` 屬性值與當前路徑完全相符（例如 "/find"）時，該 `router-link` 才會被加上 `router-link-exact-active` 類別。 */

.footer_wrap a.router-link-active{
  background-color: darkslateblue;
}

</style>