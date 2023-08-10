<template>
  <!-- 主体区域 -->
  <section id="app">
    <TodoHeader @add="handleAdd"></TodoHeader>
    <TodoMain @del="handleDel" :list="list"></TodoMain>
    <TodoFooter @clear="handleClear" :list="list"></TodoFooter>
  </section>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoMain from './components/TodoMain.vue';
import TodoFooter from './components/TodoFooter.vue';
export default {
  data() {
    return {
      list: JSON.parse(localStorage.getItem('list')) || [
        { id: 1, name: '打籃球' },
        { id: 2, name: '看電影' },
        { id: 3, name: '逛街' },
      ]
    }
  },
  methods: {
    handleAdd(todoName) {
      this.list.push({
        id: +new Date(),
        name: todoName
      })
    },
    handleDel(id) {
      this.list = this.list.filter(item => item.id !== id);
    },
    handleClear(){
      this.list = [];
    }
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  watch:{
    list:{
      deep: true,
      handler(newvalue){
        localStorage.setItem('list', JSON.stringify(newvalue))
      }
    }
  }
}
</script>

<style></style>
