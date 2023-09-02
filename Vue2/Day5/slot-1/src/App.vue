<template>
  <div>
    <MyDialog>你確定要退出本系統嗎?</MyDialog>
    <MyDialog>你確定要刪除嗎?</MyDialog>
  </div>
</template>

<script>
import MyDialog from './components/MyDialog.vue';
export default {
  data() {
    return {

    }
  },
  components: {
    MyDialog
  }
}
</script>

<style lang="scss" scoped></style>