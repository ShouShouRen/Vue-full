<template>
  <!-- 主体区域 -->
  <section id="app">
    <TodoHeader></TodoHeader>
    <TodoMain></TodoMain>
    <TodoFooter></TodoFooter>
  </section>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoMain from './components/TodoMain.vue';
import TodoFooter from './components/TodoFooter.vue';
export default {
  data () {
    return {

    }
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  }
}
</script>

<style>

</style>
