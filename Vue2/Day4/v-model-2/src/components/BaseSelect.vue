<template>
  <div>
    <!-- <select :value="cityId" @change="handelChange">
      <option value="101">台北</option>
      <option value="102">新北</option>
      <option value="103">桃園</option>
      <option value="104">嘉義</option>
      <option value="105">宜蘭</option>
    </select> -->
    <select :value="value" @change="handelChange">
      <option value="101">台北</option>
      <option value="102">新北</option>
      <option value="103">桃園</option>
      <option value="104">嘉義</option>
      <option value="105">宜蘭</option>
    </select>
  </div>
</template>

<script>
  export default {
    props: {
      // cityId: String
      value: String
    },
    methods:{
      handelChange(e){
        // console.log(e.target.value)
        this.$emit('input',e.target.value)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>