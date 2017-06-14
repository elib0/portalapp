<template>
  <div class="page-home">
    <div class="container-fluid">
      <h5 class="text-primary text-center">Curdas bebidas: {{total}}</h5>
      <div class="row align-items-center">
        <div class="col-7">
          <div class="card" v-show="total > 0">
            <div class="card-block">
              <transition-group
                name="custom"
                enter-active-class="animated fadeIn">
                <i class="fa fa-beer fa-2x beer" v-for="n in total" :key="n" aria-hidden="true" @click="restar"></i>
              </transition-group>
            </div>
          </div>
        </div>
        <div class="col">
          curdas por ronda <input class="smaller" type="number" v-model="rondas">
        </div>
      </div>
    </div>
    <button class="btn btn-success" @click="sumar">
      <i class="fa fa-plus" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        rondas: 1,
        total: 0,
        precio: 2200,
        licoreriaSeleccionada: null,
        licorarias: [
          {'El portal': 2200},
          {'La bomba': 1500}
        ]
      }
    },
    methods: {
      sumar () {
        this.total += (this.rondas) * 1
      },
      restar () {
        this.total -= 1
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-home{
    height:100%;
    background: url("../../assets/black-bg.png") no-repeat bottom center;
    -webkit-background-size: 40%;
    background-size: 40%;
    i.beer{
      color: #ffb12f;
    }
    .contador{
    }
    &>button{
      bottom: 1rem;
      right: 1rem;
      position: fixed;
    }
  }
</style>
