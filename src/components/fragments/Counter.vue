<template>
  <div class="fragment-counter d-flex justify-content-center align-items-center">
    <div class="container-fluid beers">
      <div class="row align-items-center">
        <div class="col">
          <div v-show="total > 0">
            <div class="card-block">
              <transition-group
                name="custom"
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut">
                <i class="fa fa-beer fa-2x beer" v-for="n in total" :key="n" aria-hidden="true" @click="restar"></i>
              </transition-group>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row ">
        <div class="col">
          <input placeholder="curdas por ronda" type="number" v-model="rondas">
          <label> curdas por ronda</label>
        </div>
      </div>
    </div>

    <footer>
      <button class="btn btn-success" @click="sumar">
        <i class="fa fa-plus" aria-hidden="true"></i>
      </button>
      <h5 class="text-primary text-center">Curdas bebidas: {{total}}</h5>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'fragment-counter',
    data () {
      return {
        rondas: 1,
        total: 0
      }
    },
    methods: {
      sumar () {
        this.total += (this.rondas) * 1
      },
      restar () {
        this.total -= 1
      },
      reiniciar () {
        this.total = 0
      }
    }
  }
</script>
