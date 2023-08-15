<template>
  <div>
    我是B組件發送方
    <button @click="clickSend">發送通知</button>
  </div>
</template>

<script>
import Bus from '@/utils/EventBus';
  export default {
    methods:{
      clickSend(){
        Bus.$emit('sendMsg','事件被觸發了')
      }
    },
  }
</script>

<style lang="scss" scoped>
div{
  width: 200px;
  height: 150px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  font-size: 20px;
  border: 2px solid #000;
}
</style>