<template>
  <div class="page fragment-name">
    <input class="form control" type="text" v-model="nickname" placeholder="¿Cual es tu nombre?">
  </div>
</template>

<script>
export default {
  name: 'fragment-name',
  data () {
    return {
    }
  },
  props: {
    nickname: String
  }
}
</script>

<style lang="scss" scoped>
  $bg-size: 40%;
  .fragment-name{
    background: url("../../assets/pilsen-bg.png") no-repeat top center;
    -webkit-background-size: $bg-size;
    background-size: $bg-size;
  }
</style>
