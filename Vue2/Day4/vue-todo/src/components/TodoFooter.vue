<template>
  <footer class="footer">
    <!-- 统计 -->
    <span class="todo-count">合 计:<strong> {{ list.length }} </strong></span>
    <!-- 清空 -->
    <button @click="clear" class="clear-completed">
      清空任务
    </button>
  </footer>
</template>

<script>
export default {
  props: {
    list: Array
  },
  methods:{
    clear(){
      this.$emit('clear')
    }
  }
}
</script>

<style lang="scss" scoped></style>