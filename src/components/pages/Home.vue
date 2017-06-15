<template>
  <div class="page">
    <swipe class="swipe" :auto="0" :continuous="false">
      <swipe-item>
        <b>Paso 1</b>
        <fragment-name :nickname="name"></fragment-name>
      </swipe-item>
      <swipe-item>
        <b>Paso 2</b>
      </swipe-item>
      <swipe-item>
        <b>Paso 3</b>
      </swipe-item>
      <swipe-item>
        <b>Paso 4</b>
      </swipe-item>
    </swipe>
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'vue-swipe'

  // Fragmentos
  import Name from '../fragments/Name'

  export default {
    name: 'home',
    components: {
      'swipe': Swipe,
      'swipe-item': SwipeItem,
      'fragment-name': Name
    },
    data () {
      return {
        name: ''
      }
    }
  }
</script>

<style scoped>
  @import "../../../node_modules/vue-swipe/dist/vue-swipe.css";

  .swipe {
    height: 100%;
    text-align: center;
  }
</style>
