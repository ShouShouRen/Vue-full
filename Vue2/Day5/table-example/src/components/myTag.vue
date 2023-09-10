<template>
  <div class="my-tag">
    <input v-if="isEdit" class="input" type="text" placeholder="输入标签" ref="input" v-focus @blur="isEdit = false"
      :value="value" @keyup.enter="handleEnter" />
    <div class="text" v-else @dblclick="handleClick">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String
  },
  data() {
    return {
      isEdit: false
    }
  },
  methods: {
    handleClick() {
      this.isEdit = true
    },
    handleEnter(e) {
      if(e.target.value.trim() === '') return alert('內容不得是空值');
      this.$emit('input', e.target.value);
      this.isEdit = false; 


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