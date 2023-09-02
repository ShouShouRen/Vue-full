<template>
  <div>
    <input v-focus ref="inp" type="text">
  </div>
</template>

<script>
  export default {
    // mounted(){
    //   this.$refs.inp.focus()
    // }
    directives:{
      focus:{
        inserted(el){
          el.focus()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>