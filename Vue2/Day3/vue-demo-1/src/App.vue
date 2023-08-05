<template>
  <div class="app">
    <div class="box" @click="fn"></div>
  </div>
</template>

<script>
export default {
  created() {
    console.log('我是created')
  },
  methods: {
    fn() {
      alert('hello');
    }
  }
}
</script>

<style lang="less">
.app {
  width: 400px;
  height: 400px;
  background-color: pink;

  .box {
    width: 200px;
    height: 200px;
    background-color: blue;
  }
}
</style>