<template>
  <div>
    <UserInfo :username="username" :age="age" :isSingle="isSingle" :car="car" :hobby="hobby"></UserInfo>
  </div>
</template>

<script>
import UserInfo from './components/UserInfo.vue';
  export default {
    data() {
        return {
            username: '小帥',
            age: 18,
            isSingle: true,
            car: {
                brand: '寶馬',
            },
            hobby: ['籃球', '羽球', '撞球']
        };
    },
    comments: {
        UserInfo
    },
    components: { UserInfo }
}
</script>

<style lang="scss" scoped>

</style>