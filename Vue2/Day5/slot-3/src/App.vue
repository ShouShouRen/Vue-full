<template>
  <div>
    <MyDialog>
      <template v-slot:head>
        <div>我是大標題</div>
      </template>
      <template v-slot:content>
        <div>我是內容</div>
      </template>
      <template v-slot:footer>
        <button>我是按鈕</button>
      </template>
    </MyDialog>
  </div>
</template>

<script>
import MyDialog from './components/MyDialog.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    MyDialog
  }
}
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>