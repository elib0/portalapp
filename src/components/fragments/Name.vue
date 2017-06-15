<template>
  <div class="page fragment-name">
    <modal :visible="true"></modal>
    <input class="form control" type="text" v-model="nickname" placeholder="¿Cual es tu nombre?">
  </div>
</template>

<script>
  import Modal from '../widgets/Modal'
  export default {
    name: 'fragment-name',
    data () {
      return {
        nickname: null
      }
    },
    components: {
      modal: Modal
    }
  }
</script>
