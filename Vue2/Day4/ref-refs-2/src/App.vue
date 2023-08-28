<template>
  <div class="app">
    <BaseFrom ref="baseForm"></BaseFrom>
    <button @click="handleGet">獲取數據</button>
    <button @click="handleReset">重設數據</button>
  </div>
</template>

<script>
import BaseFrom from './components/BaseFrom.vue';
export default {
  components: {
    BaseFrom,
  },
  methods: {
    handleGet() {
      console.log(this.$refs.baseForm.getValues())
    },
    handleReset() {
      this.$refs.baseForm.resetValues()
    }
  }
}
</script>

<style></style>