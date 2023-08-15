<template>
  <div>
    <button @click="change">修改數據</button>
    <SonA></SonA>
    <SonB></SonB>
  </div>
</template>

<script>
import SonA from './components/SonA.vue'
import SonB from './components/SonB.vue'
export default {
  provide() {
    return {
      color: this.color,
      userInfo: this.userInfo,
    }
  },
  data() {
    return {
      color: 'pink',
      userInfo: {
        name: 'peter',
        age: 18
      }
    }
  },
  methods: {
    change(){
      // this.color = 'green'
      this.userInfo.name = 'Chen'
    }
  },
  components: {
    SonA, SonB
  }
}
</script>

<style lang="scss" scoped></style>