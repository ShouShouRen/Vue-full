<template>
  <section class="hot">
    <div class="wrapper">
      <div class="title">
        <div class="left">
          <h3>热门品牌</h3>
          <p>国际经典 品质认证</p>
        </div>
        <div class="button">
          <a href="#"><i class="iconfont icon-arrow-left-bold"></i></a>
          <a href="#"><i class="iconfont icon-arrow-right-bold"></i></a>
        </div>
      </div>
      <div class="bd">
        <ul>
          <BaseBrandItem v-for="item in 5" :key="item"></BaseBrandItem>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.hot {
  margin-top: 60px;
  padding-bottom: 40px;
  overflow: hidden;
  background-color: #F5F5F5;

  .title {
    position: relative;
    margin-bottom: 40px;
  }

  .button {
    display: flex;
    position: absolute;
    right: 0;
    top: 47px;

    a {
      display: block;
      width: 20px;
      height: 20px;
      background-color: #ddd;
      text-align: center;
      line-height: 20px;
      color: #fff;

      &:nth-child(2) {
        margin-left: 12px;
        background-color: #00BE9A;
      }
    }
  }

  .bd {
    ul {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>