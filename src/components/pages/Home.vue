<template>
  <div class="page">
    <swipe class="swipe" :auto="0" :continuous="false">
      <swipe-item>
        <b>Paso 1</b>
        <fragment-name nickname.sync="nombre"></fragment-name>
      </swipe-item>
      <swipe-item v-if="nombre">
        <b>Paso 2</b>
      </swipe-item>
      <swipe-item v-if="licoreria">
        <b>Paso 3</b>
      </swipe-item>
      <swipe-item v-if="tipoCurda">
        <b>Paso 4</b>
        <fragment-counter></fragment-counter>
      </swipe-item>
    </swipe>
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'vue-swipe'

  // Fragmentos
  import Name from '../fragments/Name'
  import Counter from '../fragments/Counter'

  export default {
    name: 'home',
    components: {
      'swipe': Swipe,
      'swipe-item': SwipeItem,
      'fragment-name': Name,
      'fragment-counter': Counter
    },
    data () {
      return {
        nombre: null,
        licoreria: null,
        tipoCurda: null
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
