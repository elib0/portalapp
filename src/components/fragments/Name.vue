<template>
  <div class="page fragment-name d-flex justify-content-center align-items-center">
    <input class="form control" type="text" v-model="nickname" placeholder="¿Cual es tu nombre?">
  </div>
</template>

<script>
  export default {
    name: 'fragment-name',
    data () {
      return {
        nickname: null
      }
    }
  }
</script>
