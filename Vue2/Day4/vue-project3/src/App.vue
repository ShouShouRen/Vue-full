<template>
  <div class="app">
    我是App組件
    <SonComponent :title="myTitle" @changeTitle="handleChange"></SonComponent>
  </div>
</template>

<script>
import SonComponent from './components/SonComponent.vue';
export default {
  data(){
    return{
      myTitle: 'some data'
    }
  },
  methods:{
    handleChange(newTitle){
      this.myTitle = newTitle
    }
  }
  ,components: {
    SonComponent
  }
}
</script>

<style lang="scss" scoped>
.app {
  border: 3px solid #000;
  margin: 20px;
  padding: 20px;
}
</style>