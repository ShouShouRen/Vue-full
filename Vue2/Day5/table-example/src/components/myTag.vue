<template>
  <div class="my-tag">
    <input v-if="isEdit" class="input" type="text" placeholder="输入标签" ref="input" v-focus @blur="isEdit = false" />
    <div class="text" v-else @dblclick="handleClick">
      茶具
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEdit: false
    }
  },
  methods: {
    handleClick() {
      this.isEdit = true
    }
  }
}
</script>

<style lang="scss" scoped>
.my-tag {
  cursor: pointer;

  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;

    &::placeholder {
      color: #666;
    }
  }
}
</style>