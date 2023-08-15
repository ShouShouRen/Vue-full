<template>
  <div>
    我是A組件接收方
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import Bus from '../utils/EventBus'
export default {
  created() {
    Bus.$on('sendMsg', (msg) => {
      // console.log(msg)
      this.msg = msg
    })
  },
  data() {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  width: 200px;
  height: 150px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  font-size: 20px;
  border: 2px solid #000;
}
</style>