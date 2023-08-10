<template>
  <div class="userinfo">
    <h3>我是個人信息組件</h3>
    <div>姓名：{{ username }}</div>
    <div>年紀：{{ age }}</div>
    <div>是否單身：{{ isSingle ? '是' : '否' }}</div>
    <div>車：{{ car.brand }}</div>
    <div>興趣愛好：{{ hobby.join(',') }}</div>
  </div>
</template>

<script>
  export default {
    props:['username','age','isSingle','car','hobby']
  }
</script>

<style lang="scss" scoped>
.userinfo{
  width: 300px;
  border: 3px solid #000;
  padding: 20px;
  div{
    padding: 10px;
  }
}
</style>