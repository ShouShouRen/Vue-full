<template>
  <div>
    <h1 v-color='color1'>指令值1</h1>
    <h1 v-color='color2'>指令值2</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color1: 'red',
      color2: 'orange'
    }
  },
  directives: {
    color: {
      inserted(el, binding) {
        // console.log(el)
        el.style.color = binding.value;
      },
      update(el, binding) {
        console.log('指令的值被修改了');
        el.style.color = binding.value;
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>