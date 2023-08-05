<template>
  <div class="App">
    <HmHeader></HmHeader>
    <HmMain></HmMain>
    <HmFooter></HmFooter>
  </div>
</template>

<script>
import HmHeader from './components/HmHeader.vue';
import HmMain from './components/HmMain.vue';
import HmFooter from './components/HmFooter.vue';
export default {
  components: {
    // HmHeader: HmHeader,
    // HmMain: HmMain,
    // HmFooter: HmFooter
    HmHeader,
    HmMain,
    HmFooter
  }
}
</script>

<style lang="scss">
.App {
  width: 600px;
  height: 700px;
  background-color: #87ceeb;
  margin-inline: auto;
  padding: 20px;
  color: #fff;
}
</style>