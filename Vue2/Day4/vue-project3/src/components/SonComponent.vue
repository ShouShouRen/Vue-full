<template>
  <div class="sons">
    我是Son組件
    {{ title }}
    <button @click="changeFn">修改title</button>
  </div>
</template>

<script>
  export default {
    props:['title'],
    methods:{
      changeFn(){
        this.$emit('changeTitle','我是新的子組件數據')
      }
    }
  }
</script>

<style lang="scss" scoped>
.sons{
  border: 3px solid #000;
}
</style>