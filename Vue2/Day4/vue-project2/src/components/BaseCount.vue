<template>
  <div class="base-count">
    <button @click="count = count > 0 ? count - 1 : 0">-</button>
    <span>{{ count }}</span>
    <button @click="count++">+</button>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        count: 10
      }
    }
  }
</script>

<style lang="scss" scoped>
.base-count{
  margin: 20px;
}
</style>