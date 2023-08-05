<template>
  <header class="header wrapper">
    <!-- logo -->
    <div class="logo">
      <h1>
        <a href="#">小兔鲜儿</a>
      </h1>
    </div>
    <!-- 导航 -->
    <nav class="nav">
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">生鲜</a></li>
        <li><a href="#">美食</a></li>
        <li><a href="#">餐厨</a></li>
        <li><a href="#">电器</a></li>
        <li><a href="#">居家</a></li>
        <li><a href="#">洗护</a></li>
        <li><a href="#">孕婴</a></li>
        <li><a href="#">服装</a></li>
      </ul>
    </nav>
    <!-- 搜索 -->
    <div class="search">
      <span class="iconfont icon-search"></span>
      <input type="text" placeholder="搜一搜" />
    </div>
    <!-- 购物车 -->
    <div class="cart">
      <span class="iconfont icon-cart-full"></span>
      <i>2</i>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  margin: 22px auto;

  .logo {
    margin-right: 40px;
    width: 200px;
    height: 88px;
    background-color: pink;

    a {
      display: block;
      width: 200px;
      height: 88px;
      background-image: url(~@/assets/images/logo.png);
      font-size: 0;
    }
  }

  .nav {
    margin-top: 33px;
    margin-right: 27px;

    ul {
      display: flex;
    }

    li {
      margin-right: 48px;
    }

    a {
      display: block;
      height: 34px;

      &:hover {
        border-bottom: 2px solid #5EB69C;
      }
    }
  }

  .search {
    display: flex;
    margin-right: 45px;
    margin-top: 33px;
    width: 170px;
    height: 34px;
    border-bottom: 2px solid #F4F4F4;

    .icon-search {
      margin-right: 8px;
      font-size: 20px;
      color: #999;
    }

    input {
      flex: 1;

      &::placeholder {
        color: #ccc;
      }
    }
  }

  .cart {
    position: relative;
    margin-top: 33px;

    .icon-cart-full {
      font-size: 24px;
    }

    i {
      position: absolute;

      /* right: -5px; */
      left: 15px;
      top: 0;
      padding: 0 5px;
      height: 15px;
      background-color: #E26237;
      border-radius: 7px;
      font-size: 12px;
      color: #fffefe;
      line-height: 15px;
    }
  }
}
</style>