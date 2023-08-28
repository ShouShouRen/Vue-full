<template>
  <div class="app">
    <div v-if="isShowEdit">
      <input type="text" v-model="editValue" ref="inp" />
      <button>確認</button>
    </div>
    <div v-else>
      <span>{{ title }}</span>
      <button @click="handelEdit">編輯</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '大标题',
      isShowEdit: false,
      editValue: '',
    }
  },
  methods: {
    handelEdit(){
      this.isShowEdit = true
      // this.$refs.inp.focus()
      this.$nextTick(()=>{
        console.log(this.$refs.inp)
        this.$refs.inp.focus()
      })
      // setTimeout(()=>{
      //   this.$refs.inp.focus()
      // },1000)
    }
  },
}
</script>

<style>
</style>