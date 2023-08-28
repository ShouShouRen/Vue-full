<template>
  <div class="app">
    <div>
      账号: <input v-model="account" type="text">
    </div>
    <div>
      密码: <input v-model="password" type="password">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: 'account',
      password: '123456',
    }
  },
  methods: {
    getValues() {
      return {
        account: this.account,
        password: this.password
      }
    },
    resetValues(){
      this.account='',
      this.password=''
    }
  }
}
</script>

<style scoped>
.app {
  border: 2px solid #ccc;
  padding: 10px;
}

.app div {
  margin: 10px 0;
}

.app div button {
  margin-right: 8px;
}
</style>